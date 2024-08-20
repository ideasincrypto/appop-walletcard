// import { FiCommand } from "react-icons/fi";

// export default function LoadingPage() {
//   return (
//     <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300">
//       <div className="border-4 border-white -[1000]  ">
//         <FiCommand className="loading-icon" />
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-green-50 bg-opacity-60  backdrop-blur-sm transition-opacity duration-300">
      <div className="border-0 border-white   ">
        <Image
          src="/cargando.gif"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
