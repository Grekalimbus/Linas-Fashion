"use client";
import Navbar from "../components/navbar/page";
import Footer from "../components/Footer";
import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";
import useScreenHandling from "../hooks/useScreenHandling";

const page = () => {
  const { screenWidth, wrapperStyle, screen } = useScreenHandling();

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} screenWidth={screenWidth} />
        {screen <= 1152 ? <SmallDisplay /> : <LargeDisplay />}
        <Footer screen={screen} screenWidth={screenWidth} />
      </div>
    </div>
  );
};

export default page;
