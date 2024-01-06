import LargeDisplay from "./LargeDisplay";
import SmallDisplay from "./SmallDisplay";

const FourthDisplay = ({ screen }) => {
  return screen <= 1152 ? <SmallDisplay /> : <LargeDisplay />;
};

export default FourthDisplay;
