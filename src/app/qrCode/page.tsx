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
import React, { useEffect } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import Script from "next/script";
import Document from "next/document";
import moment from "moment-timezone";
import SideNavbar from "../components/SideNavbar";
import Image from "next/image";
import _ from "lodash";

import { lazy, Suspense, useState } from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";
import { GiConsoleController } from "react-icons/gi";

// const DynamicComponent = lazy(() => import("./components/QRCodeGenerator"));

const loadDynamicComponent = (qrInfo: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QRCodeCardList qrInfo={qrInfo} />
    </Suspense>
  );
};

async function fillForm(array_qrInfoList: any) {
  const formUrl = "/QR_Template_ParkingPermit.pdf";
  //const formUrl = "/QR_Template_ParkingPermit.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

  //const marioUrl = "https://pdf-lib.js.org/assets/small_mario.png";
  // const marioImageBytes = await fetch(marioUrl).then((res) =>
  //   res.arrayBuffer()
  // );

  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = await pdfDoc.getForm();

  // const txtTitleNo = await form.getTextField("txtTitleNo_0");
  // const txtMemberID = await form.getTextField("txtMemberID_0");
  // // const imgQRCode = await form.getButton("imgQRCode_0");

  // // console.log(array_qrInfoList[0].qrImageData);
  // const qrImageData = array_qrInfoList[0].qrImageData.toString();

  // await txtTitleNo.setText(array_qrInfoList[0].serialNo.toString());
  // await txtMemberID.setText(
  //   (10000 + parseInt(array_qrInfoList[0].serialNo.toString())).toString()
  // );
  //await imgQRCode.setImage(qrImageData);

  console.log("array_qrInfoList====", array_qrInfoList.length);

  const array_qrInfoListLength = array_qrInfoList.length;
  let txtfieldTitleNo = [array_qrInfoListLength];
  let txtfieldMemberID = [array_qrInfoListLength];
  let imgButtonQRCode = [array_qrInfoListLength];
  let qrImageData = [array_qrInfoListLength];

  for (let key = 0; key < array_qrInfoListLength; key++) {
    //array_qrInfoList.forEach(async (element: any, key: number) => {
    imgButtonQRCode[key] = form.getButton("imgQRCode_" + key);
    txtfieldTitleNo[key] = form.getTextField("txtTitleNo_" + key.toString());
    txtfieldMemberID[key] = form.getTextField("txtMemberID_" + key.toString());

    qrImageData[key] = await pdfDoc.embedJpg(array_qrInfoList[key].qrImageData);
    imgButtonQRCode[key].setImage(qrImageData[key]);
    txtfieldTitleNo[key].setText(array_qrInfoList[key].serialNo);
    txtfieldMemberID[key].setText(
      (10000 + parseInt(array_qrInfoList[key].serialNo.toString())).toString()
    );
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

export default function page() {
  const [dynComp, setDynComp] = useState<any>(null);
  // const [formSubmitInfo, setFormSubmitInfo] = React.useState<any>(null);

  async function GeneratePDF() {
    let array_qrInfoList = [];
    const qrDivs: any = document.getElementsByClassName("qrImage");
    //const elements: any = document.getElementsByTagName("img");
    //alert(qrDivs.length);

    for (let qrDiv of qrDivs) {
      const qrImage = qrDiv.children[0];
      const serialNo = qrDiv.title;
      const qrImageData = qrImage.currentSrc;
      array_qrInfoList.push({ serialNo: serialNo, qrImageData: qrImageData });
      //if (imgSRC.src.includes("data:image/jpeg;base64")) {

      //}
    }

    //.console.log("array_qrInfoList--", array_qrInfoList);

    var blob = await new Blob([await fillForm(await array_qrInfoList)], {
      type: "application/pdf",
    });

    var link = await document.createElement("a");
    link.href = await window.URL.createObjectURL(await blob);
    var outputFileName = await "reportName.pdf";
    link.download = await outputFileName;
    await link.click();
  }

  async function previewQRCard(data: FormData) {
    const qrCardTitle = data.get("qrCardTitle");
    const serialNoFrom = data.get("serialNoFrom");
    const serialNoEnd = data.get("serialNoEnd");

    // setFormSubmitInfo({
    //   qrCardTitle: qrCardTitle,
    //   serialNoFrom: serialNoFrom,
    //   serialNoEnd: serialNoEnd,
    // });

    const qrInfo = {
      qrCardTitle: qrCardTitle,
      serialNoFrom: serialNoFrom,
      serialNoEnd: serialNoEnd,
    };

    setDynComp(<div>{loadDynamicComponent(qrInfo)}</div>);
  }

  const [elementContent, setElementContent] = useState<any>();

  function handle_click() {
    const elements: any = document.getElementsByClassName("qrImage");
    //const elements: any = document.getElementsByTagName("img");

    alert(elements.length);

    for (let qrDiv of elements) {
      const qrImgge = qrDiv.children[0];

      //if (imgSRC.src.includes("data:image/jpeg;base64")) {
      console.log(qrDiv.title);
      console.log(qrImgge.currentSrc);
      //}
    }

    // if (elements) {
    //   //setElementContent(element.length);
    //   elements.forEach((e:any) => {
    //     console.log(e);
    //   });
    //   alert(elements.length);
    // }
  }

  //  const elements = document.querySelectorAll("nav1");

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

          <form action={previewQRCard}>
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
                defaultValue={11}
                min={"0"}
                required
              />

              <input
                type="number"
                id="serialNoEnd"
                name="serialNoEnd"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Serial # End"
                defaultValue={15}
                min={"0"}
                required
              />

              <button
                id="previewParkingPermit"
                type="submit"
                className="bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Preview - Parking Permit
              </button>

              <button
                id="previewVisitor"
                type="submit"
                className=" bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
                //onClick={() => handle_click()}
              >
                preview - Visitor
              </button>
            </div>
          </form>

          <button
            disabled={!dynComp}
            className=" bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center 
             disabled:bg-slate-200 disabled:text-slate-400 disabled:hover:text-slate-400 disabled:border-slate-300"
            onClick={() => GeneratePDF()}
          >
            Convert PDF
          </button>
          {/* <QRCodeGenerator /> */}

          {/* <div>
            <br />
            {data && data.length}
            <br />
            {data && data[0]}
            <br />
            {data && data[data.length - 1]}
            <br />
          </div> */}
        </div>

        <div className="w-full">
          {/* <QRCodeCardList /> */}
          {dynComp}
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

//==========================================================

const QRCodeCardList = ({ qrInfo }: any) => {
  const serialNoFrom = parseInt(qrInfo.serialNoFrom);
  const serialNoEnd =
    parseInt(qrInfo.serialNoEnd) +
    Math.sign(parseInt(qrInfo.serialNoEnd) - serialNoFrom) * 1;

  const data_QRCodeInfo = _.range(serialNoFrom, serialNoEnd);

  return (
    <div className="w-full  border-0 border-white grid grid-cols-4 gap-4 ">
      {data_QRCodeInfo &&
        data_QRCodeInfo.map((e, key) => {
          const qrInfo = {
            qrCodeText:
              "RCD_" +
              (10000 + e).toString() +
              "_RCD_Visitor" +
              e.toString() +
              "_Visitor",
            serialNo: e,
          };

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
                  <span className="grid w-full h-[40px] border-0 place-items-center font-sans font-bold text-3xl text-red-600 ">
                    Parking Permit
                  </span>
                  <span className="grid w-full h-[40px] border-0 place-items-center font-sans font-bold text-3xl  text-red-600">
                    {e}
                  </span>
                  <span className="grid w-full  h-[40px] place-items-center text-xl text-slate-400 font-light ">
                    {" "}
                    {10000 + e}
                  </span>
                </div>

                <QRCodeGenerator qrInfo={qrInfo} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

// "RCD_" +
// (10000 + e).toString() +
// "_RCD_Visitor" +
// e.toString +
// "_Visitor"
