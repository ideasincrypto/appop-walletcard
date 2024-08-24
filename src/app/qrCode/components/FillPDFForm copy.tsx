"use client";
import React, { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";
import moment from "moment-timezone";

export default async function page() {
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<any>();

  async function fun_getPDFBytes() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(
      "You can create PDFs!" + moment().format("YYYY-MM-DD HH:mm-ss")
    );
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }


  useEffect(() => {
    setIsClient(true);
    setData(fun_getPDFBytes());
  }, []);

  useEffect(() => {
    async function saveByteArray(reportName: any, byte: any) {
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

    saveByteArray("temp.pdf",  data);
  }, []);

  return (
    <div>
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
      <div>{JSON.stringify(await data)}</div>

      {/* <div>{ getPDFBytes.length}</div> */}

      {/* <div>{ getPDFBytes[0]}</div>

      <div>{getPDFBytes[getPDFBytes.length - 1]}</div> */}
    </div>
  );
}
