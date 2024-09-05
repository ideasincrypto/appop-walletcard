import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function saveACM2024(data: any) {
  "use server";
  const id = data.get("ID")?.valueOf().toString();
  const RegPreamble = data.get("RegPreamble")?.valueOf().toString();
  const RegQuestion = data.get("RegQuestion")?.valueOf().toString();

  await prisma.tbl_ACM2024.update({
    where: {
      ID: Number(id),
    },
    data: {
      RegPreamble: RegPreamble,
      RegQuestion: RegQuestion,
    },
  });

  revalidatePath("/acm2024");
}

//=============================================

export async function deleteACM2024(_id: string) {
  "use server";
  await prisma.tbl_ACM2024.delete({
    where: {
      ID: Number(_id),
    },
  });

  revalidatePath("/editPPUser");
}
//=============================================
