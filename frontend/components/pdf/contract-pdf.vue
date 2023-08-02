<template>
  <div>
    <h1 @click="modifyPdf">Download PDF</h1>
  </div>
</template>
<script>
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';
// import fs from 'fs'
export default {
  components: {},
  head: {
    script: [
      {
        src: 'https://unpkg.com/downloadjs@1.4.7',
      },
    ],
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    async createPdf() {
      console.log('click load');
      const pdfDoc = await PDFDocument.create();
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();
      const fontSize = 30;
      page.drawText('Creating PDFs in JavaScript is awesome!', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      });

      const pdfBytes = await pdfDoc.save();
      download(pdfBytes, 'pdf-lib_creation_example.pdf', 'application/pdf');
    },
    async modifyPdf(eventName) {
      eventName = 'chonge-1';
      const fileName = `${eventName.split(' ').join('_')}_original_document.pdf`;
      const url = `${process.env.baseUrl}/documents/original_document/${fileName}`;
      console.log("url : ", url);
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer(),
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      firstPage.drawText('This text was added with JavaScript!', {
        x: 5,
        y: height / 2 + 300,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(-45),
      });

      const pdfBytes = await pdfDoc.save();
      download(pdfBytes, 'pdf-edit.pdf', 'application/pdf');
    },
  },
};
</script>
