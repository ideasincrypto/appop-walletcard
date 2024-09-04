import React from "react";
import { PrismaClient } from "@prisma/client";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment-timezone";
import { IoTimer } from "react-icons/io5";
import { FaGripHorizontal } from "react-icons/fa";

const prisma = new PrismaClient();

export default async function Acm2024_Block() {
  const data_ACM2024 = await prisma.tbl_ACM2024.findMany({
    orderBy: { ID: "asc" },
  });

  return (
    <div className="w-full h-full flex flex-col place-items-center  overflow-y-auto border-0 p-4 ">
      {data_ACM2024 &&
        data_ACM2024.map((item: any, key: number) => {
          return (
            <div
              key={key}
              className="w-[1400px] flex flex-row bg-white rounded-2xl p-3 mb-4 "
            >
              <div className="w-[50px] text-gray-200 text-2xl border-r font-bold grid place-items-center">
                {item.ID}
              </div>
              <div className="w-[1000px] h-auto flex  flex-col border-r p-3 gap-3  border-0 ">
                <div className="w-full h-full border-0 flex flex-row">
                  <span className="text-green-400 inline-block w-[100px] font-semibold ">
                    Preamble:
                  </span>
                  <div className="w-full">{item.RegPreamble}</div>
                </div>
                <div className="w-full  h-full border-0 flex flex-row ">
                  <span className="text-green-400  inline-block  w-[100px] font-semibold">
                    Question:
                  </span>
                  <div className="w-full">{item.RegQuestion}</div>
                </div>

                <div className="w-full grid grid-cols-3 p-3 border-0">
                  <div className="w-[300px] h-[50px] flex flex-row border-0">
                    <FaUser className="text-gray-200 text-2xl mr-4 " />
                    {item.RegName}
                  </div>
                  <div className="w-[300px] h-[50px] flex flex-row border-0">
                    <MdEmail className="text-gray-200 text-2xl mr-4" />
                    {item.RegEmail}
                  </div>
                  <div className="w-[300px] h-[50px] flex flex-row border-0">
                    <MdEmail className="text-gray-200 text-2xl mr-4" />
                    {item.RegTel}
                  </div>
                  <div className="w-[900px] h-[50px] flex flex-row border-0">
                    <FaLocationDot className="text-gray-200 text-2xl mr-4" />
                    {item.RegAddress}
                  </div>
                  <div className="w-[300px] h-[50px] flex flex-row border-0">
                    <FaGripHorizontal className="text-gray-200 text-2xl mr-4" />
                    {item.RegIP}
                  </div>
                  <div className="w-[300px] h-[50px] flex flex-row border-0">
                    <IoTimer className="text-gray-200 text-2xl mr-4" />
                    {moment(item.RegDate).format("YYYY-MM-DD    HH:mm:ss")}
                  </div>
                </div>
              </div>

              <div className="w-[200] flex flex-row  p-6 gap-5 ">
                <FiEdit className="text-3xl text-gray-100 hover:cursor-pointer hover:text-red-500 " />
                <RiDeleteBin7Line className="text-3xl text-gray-100 hover:cursor-pointer hover:text-red-500 " />
              </div>
            </div>
          );
        })}
    </div>
  );
}
