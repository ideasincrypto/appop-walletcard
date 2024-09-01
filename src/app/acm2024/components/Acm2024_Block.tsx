import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Acm2024_Block() {
  const data_ACM2024 = await prisma.tbl_ACM2024.findMany();

  return (
    <div className="w-full grid place-items-center ">
      {data_ACM2024 &&
        data_ACM2024.map((item: any, key: number) => {
          return (
            <div key={key} className="w-[1200px] h-[70px]">

              <div>{JSON.stringify(item)}</div>
              <div>===============</div>
            </div>
          );
        })}
    </div>
  );
}
