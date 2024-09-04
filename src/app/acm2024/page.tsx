import React from "react";

import { revalidatePath } from "next/cache";
import SideNavbar from "../components/SideNavbar";
import Acm2024_Block from "./components/Acm2024_Block";

export default function page() {
  revalidatePath("/acm2024");

  return (
    <div className="w-screen block flex-col h-screen bg-gray-100 items-center text-gray-600">
      <div className="w-full block border-0">
        <SideNavbar />
      </div>
      <div className="w-full h-[1000px] flex flex-grow ">
        <Acm2024_Block />
      </div>
    </div>
  );
}
