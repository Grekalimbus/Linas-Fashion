import React from "react";

export const Navbar = () => {
  return (
    <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10]">
      <div className="mx-auto flex max-w-7xl  flex-wrap items-center justify-between p-7 bg-[#04111b]">
        <div className="cursor-pointer text-2xl font-medium">
          <p className="">Linas Thoemke</p>
        </div>
        <div className="w-80">
          <ul className="flex justify-around cursor-pointer">
            <li>Work</li>
            <li>About</li>
            <li>Clients</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
