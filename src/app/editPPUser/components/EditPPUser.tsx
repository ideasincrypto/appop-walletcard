import React from "react";
import Button_Save_Delete from "./Button_Save_Delete";

export default function EditPPUser({ ppUsers }: any) {
  return (
    <div className="w-full h-full  grid place-items-center">
      <div className="w-full h-full bg-white p-4 ">
        <div className="w-full flex flex-row hover:bg-yellow-100">
          <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center">
            ID
          </span>
          <span className=" text-gray-500 border-0 w-[100px] h-[50[px] flex items-center">
            userID
          </span>
          <span className=" text-gray-500 border-0 w-[400px] h-[50[px] flex items-center">
            Name
          </span>
          <span className=" text-gray-500 border-0 w-[200px] h-[50[px] flex items-center">
            DoB
          </span>
          <span className=" text-gray-500 border-0 w-[100px] h-[50[px] flex items-center">
            PP #
          </span>
          <span className=" text-gray-500 border-0 w-[200px] h-[50[px] flex items-center">
            Expiry Date
          </span>
        </div>
        {ppUsers &&
          ppUsers.map((user: any, key: number) => {
            return (
              <div className="w-full flex flex-row hover:bg-yellow-100">
                <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center">
                  {user.ID}
                </span>
                <span className=" text-gray-500 border-0 w-[100px] h-[50[px] flex items-center">
                  {user.userID}
                </span>
                <span className=" text-gray-500 border-0 w-[400px] h-[50[px] flex items-center">
                  {user.applicantName}
                </span>
                <span className=" text-gray-500 border-0 w-[200px] h-[50[px] flex items-center">
                  {user.applicantDoB}
                </span>
                <span className=" text-gray-500 border-0 w-[100px] h-[50[px] flex items-center">
                  {user.appNumber}
                </span>
                <span className=" text-gray-500 border-0 w-[200px] h-[50[px] flex items-center">
                  {user.appExpiryDate}
                </span>

                <Button_Save_Delete user={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
