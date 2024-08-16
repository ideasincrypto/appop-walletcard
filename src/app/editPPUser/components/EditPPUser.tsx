import React from "react";
import Button_Delete from "./Button_Delete";
import Button_Save from "./Button_Save";
import Button_Print from "./Button_Print";

import { deletePP, savePP } from "@/app/lib/lib";

export default function EditPPUser({ ppUsers }: any) {
  return (
    <div className="w-full h-full  grid place-items-center">
      <div className="w-full h-full bg-white p-4  flex flex-col ">
        <TitleBar />
        <div className="  flex flex-col h-[800px] w-full overflow-y-auto">
          {ppUsers &&
            ppUsers.map((user: any, key: number) => {
              return (
                <div
                  key={key}
                  className="w-full h-[60px]  flex flex-row hover:bg-lime-50 text-lg font-light group"
                >
                  <span className=" text-gray-200 border-0 w-[100px]   flex items-center  justify-center">
                    {user.ID}
                  </span>
                  <span className=" text-gray-500 border-0 w-[100px]  flex items-center">
                    {user.userID}
                  </span>
                  <span className=" text-gray-500 border-0 w-[400px]  flex items-center">
                    {user.applicantName}
                  </span>
                  <span className=" text-gray-500 border-0 w-[200px]  flex items-center">
                    {user.applicantDoB}
                  </span>
                  <span className=" text-gray-500 border-0 w-[100px]  flex items-center">
                    {user.appNumber}
                  </span>
                  <span className=" text-gray-500 border-0 w-[200px]  flex items-center">
                    {user.appExpiryDate}
                  </span>
                  <div className="flex flex-row  ">
                    <Button_Save user={user} savePP={savePP} />
                    <Button_Delete user={user} deletePP={deletePP} />
                    <Button_Print user={user} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const TitleBar = () => {
  return (
    <div className="w-full flex flex-row bg-yellow-100 font-semibold text-yellow-700">
      <span className="  border-0 w-[100px] h-[50px]  flex items-center justify-center">
        ID
      </span>
      <span className=" tborder-0 w-[100px]  flex items-center">userID</span>
      <span className=" border-0 w-[400px]  flex items-center">Name</span>
      <span className=" border-0 w-[200px]  flex items-center">DoB</span>
      <span className=" border-0 w-[100px]  flex items-center">PP #</span>
      <span className="  border-0 w-[200px]  flex items-center">
        Expiry Date
      </span>
    </div>
  );
};
