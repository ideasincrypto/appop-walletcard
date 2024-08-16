import Image from "next/image";
import { PrismaClient } from "@prisma/client";

import SideNavbar from "../components/SideNavbar";
import CompletedPP from './components/CompletedPP'

const prisma = new PrismaClient();

export default async function Home() {
  const data = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-slate-400">
      <SideNavbar />
      <CompletedPP data={data} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
