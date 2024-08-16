import { PrismaClient } from "@prisma/client";

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

        <div className="w-[1300px]  grid place-items-center bg-white">
          <EditPPUser ppUsers={ppUsers} />
        </div>
      </div>
    </div>
  );
}
