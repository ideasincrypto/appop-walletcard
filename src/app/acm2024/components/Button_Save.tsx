"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment-timezone";
import { IoTimer } from "react-icons/io5";
import { FaGripHorizontal } from "react-icons/fa";


export default function Button_Save_Delete({ item,saveACM2024 }: any) {

  const [showModal, setShowModal] = React.useState(false);

  async function handel_Save(data: FormData) {
    await saveACM2024(data);
    setShowModal(false);
    //alert(data);
  }

  return (
    <>
      <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4  ">
        <CiEdit
          className="h-[50px] w-[50px] text-gray-100 hover:text-green-400 hover:cursor-pointer"
          onClick={() => setShowModal(true)}
          // onClick={(e) => handel_Save(handel_Save)}
        />
      </span>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[1000px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-green-700">
                    Edit Info
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <form action={handel_Save}>
                  {/*body*/}

                  <div className="w-full bg-white p-10">
                    <div className="flex flex-col space-y-8 border-0">
                      <input
                        type="hidden"
                        id="ID"
                        name="ID"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="item ID"
                        defaultValue={item.ID}
                        required
                      />

                      <span className="text-green-400 inline-block w-[100px] font-semibold ">
                        Preamble:
                      </span>
                      <textarea
                        name="RegPreamble"
                        id="RegPreamble"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg  rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="RegPreamble"
                        defaultValue={item.RegPreamble}
                        rows={4}
                        cols={40}
                      />
                      <span className="text-green-400 inline-block w-[100px] font-semibold ">
                        Question:
                      </span>
                      <textarea
                        name="RegQuestion"
                        id="RegQuestion"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg  rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="RegPreamble"
                        defaultValue={item.RegQuestion}
                        rows={4}
                        cols={40}
                      />

                      <div className="w-full grid grid-cols-3 p-3 border-0">
                        <div className="w-[300px] h-[40px] flex flex-row border-0">
                          <FaUser className="text-gray-200 text-2xl mr-4 " />
                          {item.RegName}
                        </div>
                        <div className="w-[300px] h-[40px] flex flex-row border-0">
                          <MdEmail className="text-gray-200 text-2xl mr-4" />
                          {item.RegEmail}
                        </div>
                        <div className="w-[300px] h-[40px] flex flex-row border-0">
                          <MdEmail className="text-gray-200 text-2xl mr-4" />
                          {item.RegTel}
                        </div>
                        <div className="w-[900px] h-[40px] flex flex-row border-0">
                          <FaLocationDot className="text-gray-200 text-2xl mr-4" />
                          {item.RegAddress}
                        </div>
                        <div className="w-[300px] h-[40px] flex flex-row border-0">
                          <FaGripHorizontal className="text-gray-200 text-2xl mr-4" />
                          {item.RegIP}
                        </div>
                        <div className="w-[300px] h-[40px] flex flex-row border-0">
                          <IoTimer className="text-gray-200 text-2xl mr-4" />
                          {moment(item.RegDate).format(
                            "YYYY-MM-DD    HH:mm:ss"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
