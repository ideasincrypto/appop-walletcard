import { PrismaClient } from "@prisma/client";

import SideNavbar from "../components/SideNavbar";
import EditPPUser from './components/EditPPUser'


const prisma = new PrismaClient();

export default async function Home() {
  const ppUsers = await prisma.copy_of_wallet_card_20240815.findMany();
  return (
    <div className="w-screen h-screen bg-slate-400">
      <SideNavbar />
<EditPPUser ppUsers= {ppUsers}/>
      <div>{JSON.stringify(ppUsers)}</div>
    </div>
  );
}