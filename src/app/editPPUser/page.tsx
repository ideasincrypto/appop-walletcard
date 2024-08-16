import { PrismaClient } from "@prisma/client";

import SideNavbar from "../components/SideNavbar";
import EditPPUser from "./components/EditPPUser";
import AddPPUser from "./components/AddPPUser";

const prisma = new PrismaClient();

export default async function Home() {
  const ppUsers = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-green-50 flex flex-col items-center">
      <div className="w-full">
        <SideNavbar />
      </div>
      <div className="w-full h-[1000px] flex flex-row border-0 justify-center p-4 ">
        <div className="w-[1300px] grid place-items-center bg-white p-4">
          <EditPPUser ppUsers={ppUsers} />
        </div>
        <div>
          <AddPPUser />
        </div>
      </div>
    </div>
  );
}
