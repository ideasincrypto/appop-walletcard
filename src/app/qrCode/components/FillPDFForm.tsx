"use client";
import React from "react";
import { PDFDocument } from "pdf-lib";
import Document from "next/document";

async function getPDFBytes() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText("You can create PDFs!");
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

export default async function page() {
  const pdfBytes = await getPDFBytes();

  function saveByteArray(reportName: any, byte: any) {
    var blob = new Blob([byte], { type: "application/pdf" });

    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
    // var url = URL.createObjectURL(blob);
    // //if (typeof window !== "undefined") {
    // window.open(url);
    // //}
  }

  React.useEffect(() => {
    saveByteArray("temp.pdf", pdfBytes);
  }, []);

  //saveByteArray("temp.pdf", pdfBytes);

  //fs.writeFile('testfile',new Buffer(ui8a),...)
  return (
    <div>
      {JSON.stringify(pdfBytes)}
      <br />
      {pdfBytes.length}
      <br />
      {pdfBytes[0]}
      <br />
      {pdfBytes[pdfBytes.length - 1]}
      <br />
    </div>
  );
}
