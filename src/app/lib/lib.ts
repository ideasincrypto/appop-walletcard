import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

//=============================================

export async function deletePP(_id: string) {
  "use server";
  await prisma.copy_of_wallet_card_20240815.delete({
    where: {
      ID: Number(_id),
    },
  });

  revalidatePath("/editPPUser");
}
//=============================================

export async function savePP(data: any) {
  "use server";
  const id = data.get("ID")?.valueOf().toString();
  const userID = data.get("userID")?.valueOf().toString();
  const applicantName = data.get("applicantName")?.valueOf().toString();
  const applicantDoB = data.get("applicantDoB")?.valueOf().toString();
  const appNumber = data.get("appNumber")?.valueOf().toString();
  const appExpiryDate = data.get("appExpiryDate")?.valueOf().toString();

  await prisma.copy_of_wallet_card_20240815.update({
    where: {
      ID: Number(id),
    },
    data: {
      userID: Number(userID),
      applicantName: applicantName,
      applicantDoB: applicantDoB,
      appNumber: appNumber,
      appExpiryDate: appExpiryDate,
    },
  });

  revalidatePath("/editPPUser");
}
