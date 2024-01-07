import { usePathname } from "next/navigation";
import React from "react";
import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";

export const Navbar = ({ screen }) => {
  const pathname = usePathname();
  const getBorderForLonk = (link) => {
    if (link === pathname) {
      return "border-b-2 border-white";
    }
    return "";
  };

  if (screen === 0) {
    return <div></div>;
  }
  return screen <= 1152 ? (
    <SmallDisplay getBorderForLonk={getBorderForLonk} />
  ) : (
    <LargeDisplay getBorderForLonk={getBorderForLonk} />
  );
};
