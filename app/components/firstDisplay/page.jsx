import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";

const FirstDisplay = ({ screen }) => {
  return screen <= 1152 ? <SmallDisplay /> : <LargeDisplay />;
};

export default FirstDisplay;
