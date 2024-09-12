import { redirect } from "next/navigation";

export async function submitLogin(formData: FormData) {
  "use server";
  //alert("dfasdf")
  const passcode = formData.get("passcode")?.valueOf().toString();
  console.log(await process.env.PASSCODE);

  if (process.env.PASSCODE === passcode) {
    console.log("yes");
    redirect("/acm2024");
  } else {
    alert("cannot go");
  }
}
