"use client";
import React from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator({ text }: any) {
  const { Image } = useQRCode();

  const qrText = text ? text.toString() : "text";

  return (
    <div className="qrImage">
      <Image
        text={qrText}
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
