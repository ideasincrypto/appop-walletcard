// import dynamic from "next/dynamic";

// const NoSSR = dynamic(() => import("./components/FillPDFForm"), { ssr: false });

// export default function Page() {
//   return (
//     <div>
//       <NoSSR />
//     </div>
//   );
// }

// ///////////////////////
/////////////////////
"use client";
import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import Document from "next/document";
import moment from "moment-timezone";

async function fillForm() {
  const formUrl = "/QR_Template.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

  const marioUrl = "https://pdf-lib.js.org/assets/small_mario.png";
  const marioImageBytes = await fetch(marioUrl).then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(formPdfBytes);

  const marioImage = await pdfDoc.embedPng(marioImageBytes);

  const form = pdfDoc.getForm();

  const txtTitle = form.getTextField("txtTitle");
  const txtTitleNo = form.getTextField("txtTitleNo");

  const imgQRCode = form.getButton("imgQRCode");

  txtTitle.setText("Mario");
  txtTitleNo.setText("24 years");

  imgQRCode.setImage(marioImage);

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}

export default function page() {
  const [data, setData] = React.useState<any>(null);

  async function GeneratePDF(user: any) {
    async function getPDFBytes() {
      //   return pdfBytes;
      // }
      setData(await fillForm());
      // async function saveByteArray(reportName: any, pdfBytes: any) {
      var blob = await new Blob([await fillForm()], {
        type: "application/pdf",
      });

      var link = await document.createElement("a");
      link.href = await window.URL.createObjectURL(await blob);
      var fileName = await "reportName.pdf";
      link.download = await fileName;
      await link.click();

      // var url = URL.createObjectURL(blob);
      // //if (typeof window !== "undefined") {
      // window.open(url);
      // //}
    }

    //saveByteArray("temp.pdf", data);

    //saveByteArray("temp.pdf", pdfBytes);

    //fs.writeFile('testfile',new Buffer(ui8a),...)
    getPDFBytes();
  }

  //setData(await pdfBytes);

  return (
    <div className="w-screen h-screen bg-white text-slate-500">
      --
      <div>
        <button
          className="border-2 border-white"
          onClick={(e) => GeneratePDF(e)}
        >
          click pdf
        </button>
      </div>
      <div className="w-[500px] block ">{JSON.stringify(data)}</div>
      <br />
      {data && data.length}
      <br />
      {data && data[0]}
      <br />
      {data && data[data.length - 1]}
      <br />
    </div>
  );
}
