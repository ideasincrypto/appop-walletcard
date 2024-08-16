import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";



const prisma = new PrismaClient();

export default async function Home() {
  const data = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-slate-400 grid place-items-center">
      <Link  className="w-[500px] h-[60px] rounded-full grid place-items-center font-light text-lg text-gray-500 bg-white hover:bg-green-100 hover:text-green-500"  href={"listPPUser/"}  >List Completed PP User</Link>
      

    </div>
  );
}
