import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

import SideNavbar from "../components/SideNavbar";
import CompletedPP from "./components/CompletedPP";

const prisma = new PrismaClient();

export default async function Home() {
  revalidatePath("/listPPUser");

  const ppUsers = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center">
      <div className="w-full">
        <SideNavbar />
      </div>
      <div className="w-full grid place-items-center overflow-y-auto  ">
        <CompletedPP ppUsers={ppUsers} />
      </div>
    </div>
  );
}
