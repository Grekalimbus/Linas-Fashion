import { usePathname } from "next/navigation";
import React from "react";
import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";

const Navbar = ({ screen }) => {
  const pathname = usePathname();
  const getBorderForLonk = (link) => {
    if (link === pathname) {
      return "border-b-2 border-white";
    }
    return "";
  };

  return screen <= 1152 ? (
    <SmallDisplay getBorderForLonk={getBorderForLonk} />
  ) : (
    <LargeDisplay getBorderForLonk={getBorderForLonk} />
  );
};

export default Navbar;
