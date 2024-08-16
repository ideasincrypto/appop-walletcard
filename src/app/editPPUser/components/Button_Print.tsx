"use client";
import React from "react";
import { PiPrinterThin } from "react-icons/pi";

import { jsPDF } from "jspdf";

export default function Button_Save_Delete({ user, savePP }: any) {
  async function GeneratePDF(user: any) {
    //alert((rcdPermitId))
    const permitID: string = user.appNumber;

    const applicantName = user.applicantName;

    const expiryDate = user.appExpiryDate;

    const Mob = user.applicantDoB;

    const userID = user.userID.toString();

    const doc = new jsPDF("l", "mm", [90, 38]);

    doc.setFontSize(18);
    doc.setFont("", "bold");
    doc.text("Richmond Centre for Disability", 2, 5);

    doc.setFontSize(13);
    doc.setFont("helvetica", "normal");
    doc.text("Permit # ", 0, 15);

    doc.setFont("helvetica", "bold");
    doc.text(permitID, 20, 15);

    doc.setFont("helvetica", "normal");
    doc.text("Expiry: ", 43, 15);

    doc.setFont("helvetica", "bold");
    doc.text(expiryDate, 58, 15);

    doc.setFont("helvetica", "normal");
    doc.text("Name: ", 0, 22);

    doc.setFont("helvetica", "bold");
    doc.text(applicantName, 15, 22);

    doc.setFont("helvetica", "normal");
    doc.text("MoB: ", 0, 30);

    doc.setFont("helvetica", "bold");
    doc.text(Mob, 15, 30);

    doc.setFont("helvetica", "normal");
    doc.text("User # ", 43, 30);

    doc.setFont("helvetica", "bold");
    doc.text(userID, 58, 30);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("604.232.2404  parkingpermit@rcdrichmond.org", 0, 37);

    await doc.save("user-" + userID + " permit-" + permitID + ".pdf"); // will save the file in the current working directory
  }

  return (
    <>
      <span className=" text-gray-500 border-0 w-[50px] h-[50px]  flex items-center space-x-4 ">
        <PiPrinterThin
          className="h-[30px] w-[30px] text-gray-50 group-hover:text-green-400 hover:cursor-pointer"
          onClick={() => GeneratePDF(user)}
        />
      </span>
    </>
  );
}
