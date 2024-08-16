import Image from "next/image";
import { PrismaClient } from "@prisma/client";

import SideNavbar from "../components/SideNavbar";
import CompletedPP from "./components/CompletedPP";

const prisma = new PrismaClient();

export default async function Home() {
  const ppUsers = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-col items-center">
      <div className="w-full">
        <SideNavbar />
      </div>
      <div className="w-full grid place-items-center bg-gray-300">
        <CompletedPP ppUsers={ppUsers} />
      </div>
    </div>
  );
}
