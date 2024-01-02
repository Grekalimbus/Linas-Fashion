import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export const Navbar = ({ screenWidth, screen }) => {
  const [hiden, setHiden] = useState(false);

  return screenWidth <= 950 || screen <= 950 ? (
    <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10] ">
      <div className="mx-auto flex w-full  items-center justify-between p-7">
        <div>Linas Thoemke</div>
        <button onClick={() => setHiden((prev) => !prev)}>
          <FaBars />
        </button>
      </div>
      <ul
        className={`${
          !hiden ? "hidden" : ""
        } flex flex-col justify-end items-end p-4 space-y-2`}
      >
        <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
          <Link href="/">Work </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
          <Link href="/aboutPage">About </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
          <Link href="/">Clients </Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
          <Link href="/">Contacts </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10]">
      <div className="mx-auto flex max-w-7xl  flex-wrap items-center justify-between p-7 bg-[#04111b]">
        <div className="cursor-pointer text-2xl font-medium">
          <p className="">Linas Thoemke</p>
        </div>
        <div className="w-80">
          <ul className="flex justify-around cursor-pointer">
            <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
              <Link href="/">Work </Link>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
              <Link href="/aboutPage">About </Link>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
              <Link href="/">Clients </Link>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:mb-1 transition-all">
              <Link href="/">Contacts </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
