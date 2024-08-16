"use client";
import React from "react";
import { ImPrinter } from "react-icons/im";
import { jsPDF } from "jspdf";

export default function Button_GenerateWalletCard({ pp }: any) {
  async function GeneratePDF(pp: any) {
    //alert((rcdPermitId))
    const permitID: string = pp.permit
      ? pp.permit.rcdPermitId.toString()
      : "N/A";

    const applicantName = pp.applicantName;

    const expiryDate = pp.appExpiryDate;

    const Mob = pp.applicantDoB;

    const userID = pp.userID.toString();

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
    doc.text("Expiry: ", 40, 15);

    doc.setFont("helvetica", "bold");
    doc.text(expiryDate, 55, 15);

    doc.setFont("helvetica", "normal");
    doc.text("Name: ", 0, 23);

    doc.setFont("helvetica", "bold");
    doc.text(applicantName, 15, 23);

    doc.setFont("helvetica", "normal");
    doc.text("MoB: ", 0, 30);

    doc.setFont("helvetica", "bold");
    doc.text(Mob, 15, 30);

    doc.setFont("helvetica", "normal");
    doc.text("User # ", 40, 30);

    doc.setFont("helvetica", "bold");
    doc.text(userID, 55, 30);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("604.232.2404  parkingpermit@rcdrichmond.org", 0, 37);

    await doc.save("user-" + userID + " permit-" + permitID + ".pdf"); // will save the file in the current working directory
  }

  return (
    <>
      <ImPrinter
        className="w-[50px] h-[50px] text-gray-100  hover:text-blue-500 hover:cursor-pointer"
        onClick={() => GeneratePDF(pp)}
      />
    </>
  );
}
