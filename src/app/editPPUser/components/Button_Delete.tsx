"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function Button_Delete({ user, deletePP }: any) {
  function handel_Del(e: any) {
    const id = user.ID;
    const userID = user.userID;
    const applicantName = user.applicantName;
    const appNumber = user.appNumber;
    const confirmDelete = confirm(
      "are you sure you want to delete? " +
        "\n User ID: " +
        userID +
        " - " +
        applicantName +
        "\n PP #: " +
        appNumber
    );
    if (confirmDelete) {
      deletePP(id);
    } else {
      e.preventDefault();
      return null;
    }
  }

  return (
    <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4 ">
      <CiTrash
        className="h-[30px] w-[30px] text-gray-50 group-hover:text-green-200 hover:cursor-pointer"
        onClick={(e) => handel_Del(e)}
      ></CiTrash>
    </span>
  );
}
