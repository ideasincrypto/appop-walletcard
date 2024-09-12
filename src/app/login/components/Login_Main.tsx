"use client";
import React from "react";
import { redirect } from "next/navigation";
import NextCrypto from "next-crypto";

export default function Login_Main({ encrypted_PASSCODE }: any) {
  async function submitLogin(formData: FormData) {
    const passcode = formData.get("passcode")?.valueOf().toString();

    if (!passcode) {
      alert("Please enter the Passcode !!!");
      return false;
    }

    const crypto = new NextCrypto("THISISASECRET");

    //const decrypted_PASSCODE = crypto.decrypt(encrypted_PASSCODE).toString();
    const decrypted = await crypto.decrypt(encrypted_PASSCODE);

    if (decrypted === passcode) {
      //console.log("yes");
      redirect("/acm2024");
    } else {
      //setData("not matching");
      alert("Wrong Passcode !!!");
    }
  }

  return (
    <div className="w-screen h-screen">
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('/steveston.jpg')]">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  All Candidates Meeting 2024
                </h2>

                <p className="max-w-xl mt-3 text-gray-300"></p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white">
                  Richmond Centre for Disability
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300"></p>
              </div>

              <div className="mt-8">
                <form action={submitLogin}>
                  <div>
                    <input
                      type="password"
                      name="passcode"
                      id="passcode"
                      placeholder="Please enter the Passcode"
                      className="block w-full h-14 px-4 py-2 mt-2 font-light text-2xl text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full  h-14  px-4 py-2 tracking-wide  font-light text-2xl text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
