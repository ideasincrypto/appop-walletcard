"use client";
import React from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator({ qrInfo }: any) {
  const { Image } = useQRCode();

  
  const text = qrInfo.qrCodeText ? qrInfo.qrCodeText : "text";
  const serialNo = qrInfo.serialNo;

  return (
    <div className="qrImage" defaultValue={serialNo.toString()}>
      <Image
        text={text}
        options={{
          type: "image/jpeg",
          quality: 0.5,
          errorCorrectionLevel: "M",
          margin: 0,
          scale: 4,
          width: 110,
          color: {
            dark: "#17B169",
            light: "#fff",
          },
        }}
      />
    </div>
  );
}
