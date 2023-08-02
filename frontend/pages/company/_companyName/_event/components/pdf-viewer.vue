<template>
  <div>
    <vue-pdf-embed :source="source1" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  props: ['pdfReadUrl'],
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: this.pdfReadUrl
    }
  },
}
</script>