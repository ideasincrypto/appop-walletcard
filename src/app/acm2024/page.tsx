import React from "react";

import { revalidatePath } from "next/cache";
import SideNavbar from "../components/SideNavbar";
import Acm2024_Block from "./components/Acm2024_Block";

export default function page() {
  revalidatePath("/acm2024");

  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center text-gray-600">
      <div className="w-full flex">
        <SideNavbar />
      </div>
      <div className="w-full">
        <Acm2024_Block />
      </div>
    </div>
  );
}
