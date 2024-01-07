import React from "react";
import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";

const FristBlock = ({ screen }) => {
  return screen <= 1152 ? <SmallDisplay /> : <LargeDisplay />;
};

export default FristBlock;
