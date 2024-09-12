"use client";
import React from "react";

export default function Login_Main({ submitLogin }: any) {
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
                    <label
                      htmlFor="email"
                      className="block mb-2  text-gray-500 dark:text-gray-400"
                    >
                      Enter the Passcode
                    </label>
                    <input
                      type="text"
                      name="passcode"
                      id="passcode"
                      placeholder="pass code"
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
