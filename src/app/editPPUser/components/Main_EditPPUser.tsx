import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import moment from "moment-timezone";
import { revalidatePath } from "next/cache";
import Image from "next/image";

import EditPPUser from "./EditPPUser";
import AddPPUser from "./AddPPUser";

export default function Main_EditPPUser() {
  return (
    <div className="flex justify-center text-center items-center w-screen h-screen bg-slate-100">
      <div className="w-[1500px] h-[850px] flex flex-row  space-x-8">
        
          <EditPPUser />
        
        <AddPPUser />
      </div>
    </div>
  );
}
