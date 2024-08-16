"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function Button_Save_Delete({ user, savePP }: any) {
  const [showModal, setShowModal] = React.useState(false);

  async function handel_Save(data: FormData) {
    const userID = data.get("userID")?.valueOf();

    // if (typeof userID != "number") {
    //   return false;
    // }
    await savePP(data);
    setShowModal(false);
    //alert(data);
  }

  return (
    <>
      <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4 ">
        <CiEdit
          className="h-[30px] w-[30px] text-gray-200 hover:text-red-400 hover:cursor-pointer"
          onClick={() => setShowModal(true)}
          // onClick={(e) => handel_Save(handel_Save)}
        />
      </span>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-green-700">
                    Add New
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

                  <div className="w-full bg-white p-12">
                    <div className="flex flex-col space-y-8 border-0">
                      <input
                        type="hidden"
                        id="ID"
                        name="ID"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="User ID"
                        defaultValue={user.ID}
                        required
                      />

                      <input
                        type="number"
                        id="userID"
                        name="userID"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="User ID"
                        defaultValue={user.userID}
                        required
                      />

                      <input
                        type="text"
                        id="applicantName"
                        name="applicantName"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Applicant Name"
                        defaultValue={user.applicantName}
                        required
                      />

                      <input
                        type="text"
                        id="applicantDoB"
                        name="applicantDoB"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg  rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Applicant DoB"
                        defaultValue={user.applicantDoB}
                      />

                      <input
                        type="text"
                        id="appNumber"
                        name="appNumber"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="PP #"
                        defaultValue={user.appNumber}
                        required
                      />

                      <input
                        type="text"
                        id="appExpiryDate"
                        name="appExpiryDate"
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                        placeholder="PP Expiry Date"
                        defaultValue={user.appExpiryDate}
                        required
                      />
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

const Modal_Add = () => {
  return <></>;
};
