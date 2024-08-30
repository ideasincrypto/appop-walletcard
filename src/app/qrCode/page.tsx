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

// const DynamicComponent = lazy(() => import("./components/QRCodeGenerator"));

const loadDynamicComponent = (qrInfo: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QRCodeCardList qrInfo={qrInfo} />
    </Suspense>
  );
};

async function fillForm(formSubmitInfo:any) {
  const elements: any = document.getElementsByTagName("img");

  alert(elements.length);

  const qrList = {};

  for (let key of elements) {
    const imgSRC = key.src;
    if (imgSRC.includes("data:image/jpeg;base64")) {
      console.log(imgSRC);
    }
  }

  const formUrl = "/QR_Template_ParkingPermit.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

  const marioUrl = "https://pdf-lib.js.org/assets/small_mario.png";
  // const marioImageBytes = await fetch(marioUrl).then((res) =>
  //   res.arrayBuffer()
  // );

  const marioImageBytes =
    "data:image/jpeg;base64,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DHceewW3YGztEzpVbOYgZS4iAEE1pVVBC0AoBQEa0GvrxvxRxsnaVGkKxIw63BDEoim4Sc7odtb1wTUKUl6xxKNSmONACvZryAdMn13zX1t9c274Tvv+YylNl9G2fu5l/c49/vezho6MakiE6weFMr9M3DtltrdjHFN1nKnRc7YalDMKfseeNw58A4868ReoGVD9MRMnovv2CupMrnZAWZljsAhUkabk7g2FrfAYsMP5il+WcHpJfzJHYdCWykChqJFnzoiCZlBakECgY4gAmoUw050Afi0DkxYM6rszTBE5kf41IpuYs8WfLERmOHAmVRU4nMBQEgiBamGlREaesdK+X/n2TXEtW+avcksyFnbtdw/zb5XYVAZpZx1L0zVTVMJrUy1MACFocBzGEerrJM/TtiHLcYikcRbSlFQYsjtl0SqKJ5zglVBMkYBNREvdAoVEeHKjGYvZQL40NZXyZqtNSRUqTJui6yR50Xz/AE22PfHLy3cVvtflP8kc/t9B7IMozXK2K0idJ5Yi0I2qYWGRt7JRvm2uUrrbyhdS4tacqh8ejNeRFhT9sE2flbb9hpR65scdyzMGGkyME0VHMJePHyJFgEUzKJHaHKBgAQES1KFaCA09YaA0bga5DximzHI83hpWzPPZi3QZCouD6nUN8trW98azHrFzGHDmYE0ZGkRGLQNOFA+eP1oW6XTQUA6oHAyqRykKUpCEMNeIANRGghpodXXFOYMXZJezJMjOHNnLaKqMSEYpnImKZUUTgIgc5huqob10oAcNADCNabEHE2LMsN49B5eQhk1uE4G9VaN1yrpoOjAioZMxljFA4FOIlExTBWlQEOGjP4WYWS/hFL7iW5beRFy2cvDvjnfKEOoChiEIIAJCFC2iZfVWojx0dGxkfUp2xrsizCbOc0asop2emFwyttpY8ADkj44//9k=";

  console.log("marioImageBytes", marioImageBytes);

  const pdfDoc = await PDFDocument.load(formPdfBytes);

  //const marioImage = await pdfDoc.embedPng(marioImageBytes);
  const marioImage = await pdfDoc.embedJpg(marioImageBytes);

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
  const [dynComp, setDynComp] = useState<any>(null);
  const [formSubmitInfo, setFormSubmitInfo] = React.useState<any>(null);

  async function GeneratePDF(user: any) {
    formSubmitInfo;

    async function downloadPDF() {
      //   return pdfBytes;
      // }
      //setData(await fillForm());
      // async function saveByteArray(reportName: any, pdfBytes: any) {
      var blob = await new Blob([await fillForm(formSubmitInfo)], {
        type: "application/pdf",
      });

      var link = await document.createElement("a");
      link.href = await window.URL.createObjectURL(await blob);
      var fileName = await "reportName.pdf";
      link.download = await fileName;
      await link.click();
    }

    console.log(formSubmitInfo);
    downloadPDF(downloadPDF);
  }

  async function previewQRCard(data: FormData) {
    const qrCardTitle = data.get("qrCardTitle");
    const serialNoFrom = data.get("serialNoFrom");
    const serialNoEnd = data.get("serialNoEnd");

    setFormSubmitInfo({
      qrCardTitle: qrCardTitle,
      serialNoFrom: serialNoFrom,
      serialNoEnd: serialNoEnd,
    });

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

    for (let key of elements) {
      const imgSRC = key.children;
      //if (imgSRC.src.includes("data:image/jpeg;base64")) {
      console.log(imgSRC[0].currentSrc);
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
        <div className="nav1" defaultValue="valueNav1">
          nav1{elementContent}
        </div>
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
                defaultValue={10}
                min={"0"}
                required
              />

              <input
                type="number"
                id="serialNoEnd"
                name="serialNoEnd"
                className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Serial # End"
                defaultValue={20}
                min={"0"}
                required
              />

              <button
                type="submit"
                className="bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Preview
              </button>
            </div>
          </form>

          <button
            id="clickID"
            className=" bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            onClick={() => handle_click()}
          >
            Test Preview
          </button>

          <button
            disabled={!dynComp}
            className=" bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center 
             disabled:bg-slate-200 disabled:text-slate-400 disabled:hover:text-slate-400 disabled:border-slate-300"
            onClick={(e) => GeneratePDF(e)}
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
          const qrCodeText =
            "RCD_" +
            (10000 + e).toString() +
            "_RCD_Visitor" +
            e.toString() +
            "_Visitor";
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

                <QRCodeGenerator qrCodeText={qrCodeText} />
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
