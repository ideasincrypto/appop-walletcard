import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function Button_Save_Delete({ user }: any) {
  return (
    <div className=" text-gray-500 border-0 w-[100px] h-[50px]  flex items-center space-x-4 ">
      <CiEdit className="h-[30px] w-[30px] text-gray-200 hover:text-red-400 hover:cursor-pointer" />
      <CiTrash className="h-[30px] w-[30px] text-gray-200  hover:text-red-400 hover:cursor-pointer" ></CiTrash>
    </div>
  );
}
