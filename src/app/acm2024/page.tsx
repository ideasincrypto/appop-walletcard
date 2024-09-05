import React from "react";

import { revalidatePath } from "next/cache";
import SideNavbar from "../components/SideNavbar";
import Acm2024_Block from "./components/Acm2024_Block";
import Image from "next/image";

export default function page() {
  revalidatePath("/acm2024");

  return (
    <div className="w-screen block flex-col h-screen bg-gray-100 items-center text-gray-600">
      <div className="w-full block border-0">
        <SideNavbar />
      </div>
      <div className="w-full h-[1000px] flex flex-grow flex-row ">
        <div className=" w-[300px] flex flex-col bg-white rounded-2xl p-0 gap-4 border-0">
          <Image
            src="/ACM2024.jpg"
            className="w-[300px]"
            width={300}
            height={300}
            alt={"tea"}
          ></Image>
        </div>
        <Acm2024_Block />
      </div>
    </div>
  );
}
