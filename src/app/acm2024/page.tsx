import React from "react";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import SideNavbar from "../components/SideNavbar";
import Acm2024_Block from "./components/Acm2024_Block";
import Image from "next/image";
import _ from "lodash";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const prisma = new PrismaClient();

export default async function page() {
  revalidatePath("/acm2024");

  const data_ACM2024 = await prisma.tbl_ACM2024.findMany({
    orderBy: { ID: "asc" },
  });

  const length_data_ACM2024 = data_ACM2024.length;

  const groupBy_IP_data_ACM2024 = _.groupBy(
    data_ACM2024,
    (regInfo) => regInfo.RegIP
  );

  const length_groupBy_IP_data_ACM2024 = Object.keys(groupBy_IP_data_ACM2024)
    .length;

  return (
    <div className="w-screen block flex-col h-screen bg-gray-100 items-center text-gray-600">
      <div className="w-full block border-0">
        <SideNavbar />
      </div>

      <div className="w-full h-[1000px] flex flex-grow flex-row ">
        <div className=" w-[250px] flex flex-col bg-white rounded-2xl p-0 gap-4 border-0">
          <div className="flex flex-col justify-center items-center space-y-5 h-full">
            <div className="border p-4 rounded-2xl bg-slate-50 w-[200px]">
              <div className="flex flex-row place-items-center gap-1">
                <HiOutlineSquare3Stack3D className="w-[30px] h-[30px]" />
                <span className="text-slate-400 mr-3 ">Total Record(s):</span>
              </div>
              <span className="text-4xl font-bold text-gray-600 block border-0 w-full text-center ">
                {length_data_ACM2024}
              </span>
            </div>

            <div className="border p-4 rounded-2xl bg-slate-50 w-[200px]">
              <div className="flex flex-row  place-items-center gap-1">
                <LiaUserFriendsSolid className="w-[30px] h-[30px]" />
                <span className="text-slate-400 mr-3">Total people:</span>
              </div>
              <span className="text-4xl font-bold text-gray-600 block border-0 w-full text-center ">
                {length_groupBy_IP_data_ACM2024}
              </span>
            </div>
          </div>
          <Image
            src="/ACM2024.jpg"
            className="w-full"
            width={250}
            height={250}
            alt={"tea"}
          ></Image>
        </div>
        <Acm2024_Block data_ACM2024={data_ACM2024} />
      </div>
    </div>
  );
}
