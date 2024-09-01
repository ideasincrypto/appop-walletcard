import React from 'react'
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import SideNavbar from "../components/SideNavbar";


const prisma = new PrismaClient();

export default async function page() {



        const dataACM = await prisma.tbl_ACM2024.findMany()
      
        revalidatePath("/editPPUser");
      
  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center text-gray-600">
      <div className="w-full flex">
        <SideNavbar />
      </div>
    <div>{JSON.stringify(dataACM)}</div>
    </div>
  )
}
