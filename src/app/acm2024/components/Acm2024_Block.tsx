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

import Button_Delete from "./Button_Delete";
import Button_Save from "./Button_Save";

import { saveACM2024, deleteACM2024 } from "../lib/lib";

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
                  <div className="w-full ">{item.RegPreamble}</div>
                </div>

                <div className="w-full  h-full border-0 flex flex-row ">
                  <span className="text-green-400  inline-block  w-[100px] font-semibold">
                    Question:
                  </span>
                  <div className="w-full ">{item.RegQuestion}</div>
                </div>

                <div className="w-full grid grid-cols-3 p-3 border-0 pl-[100px]">
                  <div className="w-[300px] h-[40px] flex flex-row border-0 ">
                    <FaUser className="text-gray-200 text-2xl mr-4 " />
                    <span className="text-lime-500"> {item.RegName}</span>
                  </div>
                  <div className="w-[300px] h-[40px] flex flex-row border-0 ">
                    <MdEmail className="text-gray-200 text-2xl mr-4" />
                    <span className="text-lime-500">{item.RegEmail}</span>
                  </div>
                  <div className="w-[300px] h-[40px] flex flex-row border-0 ">
                    <MdEmail className="text-gray-200 text-2xl mr-4" />
                    <span className="text-lime-500"> {item.RegTel}</span>
                  </div>
                  <div className="w-[900px] h-[40px] flex flex-row border-0">
                    <FaLocationDot className="text-gray-200 text-2xl mr-4" />
                    <span className="text-lime-500"> {item.RegAddress}</span>
                  </div>
                  <div className="w-[300px] h-[40px] flex flex-row border-0 ">
                    <FaGripHorizontal className="text-gray-200 text-2xl mr-4" />
                    <span className="text-lime-500"> {item.RegIP}</span>
                  </div>
                  <div className="w-[300px] h-[40px] flex flex-row border-0 ">
                    <IoTimer className="text-gray-200 text-2xl mr-4" />
                    <span className="text-lime-500">
                      {" "}
                      {moment(item.RegDate).format("YYYY-MM-DD    HH:mm:ss")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-[200] flex flex-row  p-6 gap-5 ">
                <Button_Save item={item} saveACM2024={saveACM2024} />

                <Button_Delete item={item} deleteACM2024={deleteACM2024} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
