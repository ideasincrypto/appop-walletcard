import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const megaData = [
  {
    link: "listPPUser/",
    title: "Wallet Card",
  },
  {
    link: "editPPUser/",
    title: "Edit PP User",
  },
  {
    link: "qrCode/",
    title: "QR Code",
  },
  {
    link: "acm2024/",
    title: "ACM 2024",
  },
];
export default async function Home() {
  //const data = await prisma.copy_of_wallet_card_20240815.findMany();

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="w-[500px] h-[500px] gap-7 relative inline-flex  group flex-col">
        {megaData.map((menu: any, key: number) => {
          return (
            <>
              <Link
                key={key}
                className="h-[70px] w-full relative inline-flex items-center justify-center text-2xl font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-slate-300 hover:bg-slate-700"
                href={menu.link}
              >
                {menu.title}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
