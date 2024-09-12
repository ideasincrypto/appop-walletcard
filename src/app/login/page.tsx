import React from "react";
import Login_Main from "./components/Login_Main";
import NextCrypto from "next-crypto";

export default async function page() {
  const PASSCODE = await process.env.PASSCODE;
  const SECRETKEY = await process.env.SECRETKEY;

  const crypto = new NextCrypto(SECRETKEY ? SECRETKEY.toString() : "");

  const encrypted_PASSCODE = await crypto.encrypt(
    PASSCODE ? PASSCODE.toString() : ""
  );

  //const decrypted = await crypto.decrypt(encrypted_PASSCODE);

  return (
    <div>
      <Login_Main encrypted_PASSCODE={encrypted_PASSCODE} />
    </div>
  );
}
