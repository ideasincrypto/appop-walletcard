import Link from "next/link";
import React from "react";

const megaData = [
  // {
  //   link: "listPPUser/",
  //   title: "Wallet Card",
  // },
  // {
  //   link: "editPPUser/",
  //   title: "Edit PP User",
  // },
  // {
  //   link: "qrCode/",
  //   title: "QR Code",
  // },
  {
    link: "acm2024/",
    title: "ACM 2024",
  },
];

export default function SideNavbar() {
  return (
    <nav className="w-full  mx-auto px-6 py-3 bg-green-800">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link href="/" className="hover:text-blue-600">
            HOME
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {megaData.map((menu: any, key: number) => {
              return (
                <li key={key}>
                  <Link
                    href={menu.link}
                    className="text-white hover:text-yellow-300"
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:hidden">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <ul className="mt-4 space-y-4">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
