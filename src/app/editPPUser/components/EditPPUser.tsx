import React from "react";

export default function EditPPUser({ ppUsers }: any) {
  return (
    <div className="w-full h-full bg-gray-300">
      <div></div>
      <div>{JSON.stringify(ppUsers)}</div>
    </div>
  );
}
