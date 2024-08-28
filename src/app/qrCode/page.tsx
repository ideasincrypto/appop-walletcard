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
import Script from "next/script";
import Document from "next/document";
import moment from "moment-timezone";
import SideNavbar from "../components/SideNavbar";
import Image from "next/image";
import _ from "lodash";

import { lazy, Suspense, useState } from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";

const DynamicComponent = lazy(() => import("./components/QRCodeGenerator"));

const loadDynamicComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </Suspense>
  );
};

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
  const [dynComp, setDynComp] = useState<any>();
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
    }
    getPDFBytes();
  }

  async function previewQRCard() {
    setDynComp(<div>{loadDynamicComponent()}</div>);
  }

  //setData(await pdfBytes);

  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center text-gray-600">
      <div className="w-full flex">
        <SideNavbar />
      </div>

      <div className="w-full h-full flex flex-row bg-slate-100 p-4 space-x-14 border-8">
        <div className=" w-[400px] flex flex-col bg-white rounded-2xl p-8 gap-4 border-0">
          {/* <Image 
            src={"/coffee.png"}
            className="w-[400px] "
            width={400}
            height={400}
            alt={"tea"}
          ></Image> */}

          <form action={""}>
            <div className="flex flex-col space-y-8 border-0">
              <input
                type="text"
                id="qrCardTitle"
                name="qrCardTitle"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="QR Card Title"
                defaultValue={"Visitor"}
                required
              />

              <input
                type="number"
                id="serialNoFrom"
                name="serialNoFrom"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Serial # From"
                defaultValue={10}
                min={"0"}
                required
              />

              <input
                type="number"
                id="serialNoTo"
                name="serialNoTo"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Serial # To"
                defaultValue={20}
                min={"0"}
                required
              />

              <button
                type="submit"
                className="bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </div>
          </form>

          <button
            className="h-[40px] bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            onClick={() => previewQRCard()}
          >
            Initialize!
          </button>

          <button
            className="h-[40px] bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            onClick={(e) => GeneratePDF(e)}
          >
            convert pdf
          </button>
          <QRCodeGenerator />

          <div>
            <br />
            {data && data.length}
            <br />
            {data && data[0]}
            <br />
            {data && data[data.length - 1]}
            <br />
          </div>
        </div>

        <div className="w-full  border-0 border-white grid grid-cols-4 gap-4 ">
          <QRCodeCardList />
        </div>

        <Script
          type="text/javascript"
          async
          src={`/static/jquery.min.js?cacheControl=${new Date().getTime()}`}
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/JS.js"
          strategy="beforeInteractive"
        ></Script>
      </div>
    </div>
  );
}

const QRCodeCardList = () => {
  const serialNoFrom = 1;
  const serialNoEnd = 20;
  const data_QRCodeInfo = _.range(serialNoFrom, serialNoEnd);

  return (
    <>
      {data_QRCodeInfo &&
        data_QRCodeInfo.map((e, key) => {
          return (
            <div
              key={key}
              className="w-[400px] h-[200px] border-0 rounded-2xl bg-white p-4"
            >
              <div className="flex flex-col w-full mb-2 ">
                <Image
                  src={"/Banner_RCD_revised_2022_Mar.png"}
                  alt="RCD Logo"
                  width="350"
                  height="50"
                />
              </div>

              <div className="flex flex-row w-full border-0">
                <div className="flex flex-col w-[250px] ">
                  <span className="grid w-full h-[40px] border-0 place-items-center font-sans font-bold text-3xl ">
                    RCD
                  </span>
                  <span className="grid w-full h-[40px] border-0 place-items-center font-sans font-bold text-3xl ">
                    Visitor {e}
                  </span>
                  <span className="grid w-full  h-[40px] place-items-center text-xl text-slate-400 font-light ">
                    {" "}
                    {10000 + e}
                  </span>
                </div>

                <QRCodeGenerator
                  text={
                    "RCD_" +
                    (10000 + e).toString() +
                    "_RCD_Visitor" +
                    e.toString() +
                    "_Visitor"
                  }
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

// "RCD_" +
// (10000 + e).toString() +
// "_RCD_Visitor" +
// e.toString +
// "_Visitor"
