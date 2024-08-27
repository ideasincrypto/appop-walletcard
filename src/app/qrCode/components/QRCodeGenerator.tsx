import React from "react";
import { useQRCode } from "next-qrcode";

function App() {
  const { Image } = useQRCode();

  const lib_Image = Image({
    text: "https://github.com/bunlong/next-qrcode",
    options: {
      type: "image/jpeg",
      quality: 0.3,
      errorCorrectionLevel: "M",
      margin: 3,
      scale: 4,
      width: 200,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    },
  });

  console.log("Image==", lib_Image);

  return (
    <div className="qrImage">
      <Image
        text={"https://github.com/bunlong/next-qrcode"}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
      />
      <div>---###-{JSON.stringify(Image)}</div>
    </div>
  );
}

export default App;
