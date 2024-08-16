import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//=============================================

export async function deletePP(_id: string) {
  "use server";
  await prisma.copy_of_wallet_card_20240815.delete({
    where: {
      ID: Number(_id),
    },
  });

  //redirect("/barrageList");
}
//=============================================
