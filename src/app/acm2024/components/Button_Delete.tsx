"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function Button_Delete({ item, deleteACM2024 }: any) {
  function handel_Del(e: any) {
    const id = item.ID;
    const confirmDelete = confirm(
      "are you sure you want to delete? " + "\n Record ID: " + id
    );
    if (confirmDelete) {
      deleteACM2024(id);
    } else {
      e.preventDefault();
      return null;
    }
  }

  return (
    <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4 ">
      <CiTrash
        className="h-[50px] w-[50px] text-gray-100 hover:text-green-400 hover:cursor-pointer"
        onClick={(e) => handel_Del(e)}
      ></CiTrash>
    </span>
  );
}
