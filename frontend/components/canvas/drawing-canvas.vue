<template>
  <div>
    <VueSignaturePad
      id="signature"
      width="100%"
      height="200px"
      ref="signaturePad"
      :options="{
        onBegin: () => {
          $refs.signaturePad.resizeCanvas();
        },
      }"
    />
    <div class="mt-3">
      <b-button variant="success" @click="save">บันทึก</b-button>
      <b-button variant="outline-primary" @click="clear">ล้างค่า</b-button>
    </div>
  </div>
</template>

<script>
import { VueSignaturePad } from 'vue-signature-pad';
import Swal from 'sweetalert2';
import DocumentService from '../../src/services/document/document.service';

export default {
  name: 'MySignaturePad',
  components: {
    VueSignaturePad,
  },
  props: ['documentId'],
  data() {
    return {
      options: {
        penColor: '#c0f',
      },
    };
  },
  mounted() {
    console.log('canvas mounted');
  },
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      //   console.log('canvas data : ', data);
      console.log('docvu : ', this.documentId);

      Swal.fire({
        title: 'ยืนยันการบันทึกข้อมูลลายเซ็นหรือไม่',
        text: 'ท่านสามารถบันทึก/แก้ไขข้อมูลลายเซ็นได้ไม่เกิน 2 ครั้งเท่านั้น',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: `ยกเลิก`,
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const payload = {
            documentId: this.documentId,
            contractBase64Data: data,
          };

          const updateData = await DocumentService.addContractToDocument(
            payload,
          ).then(
            (response) => {
              if (response.data.status == 'success') {
                Swal.fire({
                  icon: 'success',
                  text: 'บันทึกข้อมูลเรียบร้อยแล้ว',
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  window.location.href += '#contract';
                  location.reload();
                });
              }
            },
            (error) => {
              console.log('error from dashboard/#contract : ', error.response);
              if (error.response.data) {
                Swal.fire({
                  icon: 'error',
                  text: 'บันทึกข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง',
                  showConfirmButton: false,
                  timer: 4000,
                });
              }
            },
          );
        }
      });
    },
  },
};
</script>
<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container {
  width: '100%';
  padding: 8px 16px;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}
</style>
