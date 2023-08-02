<template>
  <div>
    <vue-pdf-app style="height: 100vh" :pdf="url" :config="config"></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from 'vue-pdf-app';
import 'vue-pdf-app/dist/icons/main.css';

export default {
  components: {
    VuePdfApp,
  },
  props: ['base64'],
  data() {
    return {
      url: this.getPdf(),
      config: {
        sidebar: false,
        secondaryToolbar: false,
        toolbar: {
          toolbarViewerLeft: {
            findbar: false,
            previous: true,
            next: true,
            pageNumber: true,
          },
          toolbarViewerRight: {
            presentationMode: false,
            openFile: false,
            print: false,
            download: true,
            viewBookmark: false,
          },
          toolbarViewerMiddle: {
            zoomOut: true,
            zoomIn: true,
            scaleSelectContainer: true,
          },
        },
      },
      number: 1,
    };
  },
  mounted() {
    console.log('mounted');
    this.$root.$refs.pdfViewer = this;
  },
  methods: {
    getPdf() {
      const pdf = this.base64;
      return this.base64ToArrayBuffer(pdf);
    },
    base64ToArrayBuffer(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    },
  },
};
</script>
