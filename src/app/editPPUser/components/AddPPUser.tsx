import React from "react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function AddPPUser() {
  async function addPP(data: FormData) {
    "use server";
    const userID = data.get("userID")?.valueOf();
    const applicantName = data.get("applicantName")?.valueOf().toString();
    const applicantDoB = data.get("applicantDoB")?.valueOf().toString();
    const appNumber = data.get("appNumber")?.valueOf().toString();
    const appExpiryDate = data.get("appExpiryDate")?.valueOf().toString();

    await prisma.copy_of_wallet_card_20240815.create({
      data: {
        userID: Number(userID),
        applicantName: applicantName,
        applicantDoB: applicantDoB || undefined,
        appNumber: appNumber || undefined,
        appExpiryDate: appExpiryDate,
      },
    });
    revalidatePath("/editPPUser");
    //redirect("/barrageList");
  }

  return (
    <div className="w-full h-full  border-0 flex flex-col bg-white p-2 ">
      <div className=" w-full h-[200px] grid flex-row place-content-center border-0">
        <Image
          src={"/tea.jpg"}
          className="w-[400px]"
          width={400}
          height={400}
          alt={"tea"}
        ></Image>
      </div>
      <div className="w-full bg-white p-12">
        <form action={addPP}>
          <div className="flex flex-col space-y-8 border-0">
            <input
              type="text"
              id="userID"
              name="userID"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="User ID"
              required
            />

            <input
              type="text"
              id="applicantName"
              name="applicantName"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="Applicant Name"
              required
            />

            <input
              type="text"
              id="applicantDoB"
              name="applicantDoB"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-lg  rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="Applicant DoB"
            />

            <input
              type="text"
              id="appNumber"
              name="appNumber"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="PP #"
              required
            />

            <input
              type="text"
              id="appExpiryDate"
              name="appExpiryDate"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
              placeholder="PP Expiry Date"
              required
            />

            <button
              type="submit"
              className="bg-green-100 border border-green-300 text-green-600 hover:text-white hover:bg-green-700 focus:ring-4 text-lg focus:outline-none focus:ring-blue-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>

          <div className="flex items-start mb-6"></div>
        </form>
      </div>
    </div>
  );
}
