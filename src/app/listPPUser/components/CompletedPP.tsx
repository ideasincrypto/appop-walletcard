import React from "react";

import Button_GenerateWalletCard from './Button_GenerateWalletCard'

export default function CompletedPP({ data }: any) {
  return (
    <div className="w-full h-full bg-gray-100 grid grid-cols-3 gap-8 p-4 ">
      {data &&
        data.map((pp: any, key: number) => {
          return (
            <div className="w-[500px] h-[200px] flex flex-row  p-6 font-light bg-white shadow-xl rounded-2xl text-gray-700  ">
              <div className="w-[350px] border-0">
                <div className="w-full flex flex-row">
                  <span className="w-[100px]  block text-slate-400">
                    userID:{" "}
                  </span>
                  <span className=""> {pp.userID}</span>
                </div>
                <div className="w-full flex flex-row">
                  <span className="w-[100px]  block text-slate-400">
                    Name:{" "}
                  </span>
                  <span className="">{pp.applicantName}</span>
                </div>
                <div className="w-full flex flex-row">
                  <span className="w-[100px]  block text-slate-400">DoB: </span>
                  <span className="">{pp.applicantDoB}</span>
                </div>
                <div className="w-full flex flex-row">
                  <span className="w-[100px]  block text-slate-400">
                    PP #:{" "}
                  </span>
                  <span className="">{pp.appNumber}</span>
                </div>
                <div className="w-full flex flex-row">
                  <span className="w-[100px]  block text-slate-400">
                    Expiry Date:{" "}
                  </span>{" "}
                  <span className="">{pp.appExpiryDate}</span>
                </div>
              </div>
              <div className="w-[100px] h-full border-0 grid  place-items-center">
                <Button_GenerateWalletCard pp={pp}/>
                
              </div>
            </div>
          );
        })}
    </div>
  );
}
