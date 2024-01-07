"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const SmallDisplay = ({ getBorderForLonk }) => {
  const [hiden, setHiden] = useState(false);
  return (
    <nav className="shadow mx-auto bg-[#04111b] w-full sticky top-0 z-[10] ">
      <div className="mx-auto max-w-7xl flex w-full items-center justify-between p-7">
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
        <li className={`cursor-pointer  ${getBorderForLonk("/")}`}>
          <Link href="/">Work </Link>
        </li>
        <li className={`cursor-pointer  ${getBorderForLonk("/about")}`}>
          <Link href="/about">About </Link>
        </li>
        <li className={`cursor-pointer  ${getBorderForLonk("/clients")}`}>
          <Link href="/clients">clients </Link>
        </li>
        <li className={`cursor-pointer  ${getBorderForLonk("/contacts")}`}>
          <Link href="/contacts">Contacts </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SmallDisplay;
