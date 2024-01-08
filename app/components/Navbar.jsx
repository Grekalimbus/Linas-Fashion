"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const mx = "max-[1124px]:";
const min = "mix-[1124px]:";

export const Navbar = () => {
  const pathname = usePathname();
  const [hidden, sethidden] = useState(false);

  const getBorderForLonk = (link) => {
    return link === pathname
      ? `cursor-pointer ${mx}p-4 border-b-[2px] border-white`
      : "";
  };

  const main = getBorderForLonk("/");
  const about = getBorderForLonk("/about");
  const clients = getBorderForLonk("/clients");
  const contacts = getBorderForLonk("/contacts");

  return (
    <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between p-10 bg-[#04111b] ">
        <p className="cursor-pointer text-2xl font-medium fixed top-6 left-4">
          Linas Thoemke
        </p>
        <button
          className={`cursor-pointer hidden ${mx}block ${mx}fixed top-5 right-4 `}
          onClick={() => sethidden((prev) => !prev)}
        >
          <FaBars className={`${mx}w-[35px] ${mx}h-[35px] mr-4`} />
        </button>

        <ul
          className={`${
            !hidden ? "hidden" : ""
          } flex  ${mx}flex-col ${mx}mt-16  ${mx}items-center ${min}w-1/3  ${min}fixed  top-4 right-8 -4 space-y-2 ${min}mt-0 mx-auto ${min}flex ${min}justify-between ${min}items-end`}
        >
          <li className={` ${main} ${mx}p-4`}>
            <Link href="/">Work </Link>
            <span className="${main}"></span>
          </li>
          <li className={` cursor-pointer  ${about} ${mx}p-4`}>
            <Link href="/about">About </Link>
            <span className="${about}"></span>
          </li>
          <li className={`cursor-pointer  ${clients}  ${mx}p-4  `}>
            <Link className="" href="/clients">
              Clients{" "}
            </Link>
            <span className="${clients}"></span>
          </li>
          <li className={`cursor-pointer ${contacts}  ${mx}p-4  `}>
            <Link className="flex justify-end" href="/contacts">
              Contacts
            </Link>
            <span className="${contacts}"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
