"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function Button_Save_Delete({ user, savePP }: any) {
  function handel_Save(e: any) {
    const id = user.ID;
    const userID = user.userID;
    const applicantName = user.applicantName;
    const appNumber = user.appNumber;
  }

  return (
    <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4 ">
      <CiEdit
        className="h-[30px] w-[30px] text-gray-200 hover:text-red-400 hover:cursor-pointer"
        onClick={(e) => handel_Save(handel_Save)}
      />
    </span>
  );
}
