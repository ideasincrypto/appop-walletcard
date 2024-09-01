"use client";
import React from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator({ qrInfo }: any) {
  const { Image } = useQRCode();

  const text = qrInfo.qrCodeText ? qrInfo.qrCodeText : "text";
  const serialNo = qrInfo.serialNo;

  return (
    <div className="qrImage" title={serialNo.toString()}>
      <Image
        text={text}
        options={{
          type: "image/jpeg",
          quality: 0.5,
          errorCorrectionLevel: "M",
          margin: 0,
          scale: 4,
          width: 100,
          color: {
            dark: "#00308F",
            light: "#fff",
          },
        }}
      />
    </div>
  );
}
