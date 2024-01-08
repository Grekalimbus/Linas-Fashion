"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const mx = "max-[1124px]:";

export const Navbar = () => {
  const [hidden, sethidden] = useState(false);
  const pathname = usePathname();
  const getBorderForLonk = (link) => {
    if (link === pathname) {
      return "cursor-pointer max-[1124px]:p-4 border-b-[2px] border-white";
    }
    return "";
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
          className={`cursor-pointer hidden max-[1124px]:block max-[1124px]:fixed top-5 right-4 `}
          onClick={() => sethidden((prev) => !prev)}
        >
          <FaBars
            className={`max-[1124px]:w-[35px] max-[1124px]:h-[35px] mr-4`}
          />
        </button>

        <ul
          className={`${
            !hidden ? "hidden" : ""
          } flex  max-[1124px]:flex-col max-[1124px]:mt-16  max-[1124px]:items-center min-[1124px]:w-1/3  min-[1124px]:fixed  top-4 right-8 -4 space-y-2 min-[1124px]:mt-0 mx-auto min-[1124px]:flex min-[1124px]:justify-between min-[1124px]:items-end`}
        >
          <li className={` ${main} max-[1124px]:p-4`}>
            <Link href="/">Work </Link>
            <span className="${main}"></span>
          </li>
          <li className={` cursor-pointer  ${about} max-[1124px]:p-4`}>
            <Link href="/about">About </Link>
            <span className="${about}"></span>
          </li>
          <li className={`cursor-pointer  ${clients}  max-[1124px]:p-4  `}>
            <Link className="" href="/clients">
              Clients{" "}
            </Link>
            <span className="${clients}"></span>
          </li>
          <li className={`cursor-pointer ${contacts}  max-[1124px]:p-4  `}>
            <Link className="flex justify-end" href="/contacts">
              Contacts
            </Link>
            <span className="${contacts}"></span>
          </li>
        </ul>
      </div>
    </nav>
  );

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
  </nav>;
  // ) : (
  //   <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10]">
  //     <div className="mx-auto flex max-w-6xl  flex-wrap items-center justify-between pt-7 pb-7 bg-[#04111b]">
  //       <div className="cursor-pointer text-2xl font-medium">
  //         <p className="">Linas Thoemke</p>
  //       </div>
  //       <div className="w-80">
  //         <ul className="flex justify-around cursor-pointer">
  //           <li className={`cursor-pointer  ${getBorderForLonk("/")}`}>
  //             <Link href="/">Work </Link>
  //           </li>
  //           <li className={`cursor-pointer  ${getBorderForLonk("/about")}`}>
  //             <Link href="/about">About </Link>
  //           </li>
  //           <li className={`cursor-pointer  ${getBorderForLonk("/clients")}`}>
  //             <Link href="/clients">Clients </Link>
  //           </li>
  //           <li className={`cursor-pointer  ${getBorderForLonk("/contacts")}`}>
  //             <Link href="/contacts">Contacts </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};
