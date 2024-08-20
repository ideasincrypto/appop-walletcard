import { PrismaClient } from "@prisma/client";
import React, { Suspense } from "react";
import Image from "next/image";

import SideNavbar from "../components/SideNavbar";
import EditPPUser from "./components/EditPPUser";
import AddPPUser from "./components/AddPPUser";

const prisma = new PrismaClient();

export default async function Home() {
  const ppUsers = await prisma.copy_of_wallet_card_20240815.findMany({
    orderBy: {
      ID: "desc",
    },
  });
  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center">
      <div className="w-full flex">
        <SideNavbar />
      </div>

      <div className="w-full  flex flex-1 flex-grow flex-row border-0 justify-center  overflow-y-auto">
        <div className="border-0">
          <AddPPUser />
        </div>

        <div className="w-[1300px]  grid place-items-center bg-white text-slate-500">
          <Suspense
            fallback={
              <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300">
                <div className="border-0 border-white   ">
                  <Image
                    src="/cargando.gif"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            }
          >
            <EditPPUser ppUsers={ppUsers} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
