import SmallDIsplay from "./SmallDIsplay";
import LargeDisplay from "./LargeDisplay";
const SixthDisplay = ({screen}) => {
  return screen <= 1152 ? <SmallDIsplay /> : <LargeDisplay />;
};

export default SixthDisplay;
