"use client";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import useScreenHandling from "../hooks/useScreenHandling";
import FirstBlockContent from "./FirstBlockContent";
import SecondBlockContent from "./SecondBlockContent";
import { ThirdBlockContent } from "./ThirdBlockContent";

const AboutPage = () => {
  const { screenWidth, wrapperStyle, screen } = useScreenHandling();

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} screenWidth={screenWidth} />

        <FirstBlockContent screen={screen} screenWidth={screenWidth} />
        <SecondBlockContent screen={screen} screenWidth={screenWidth} />
        <ThirdBlockContent screen={screen} screenWidth={screenWidth} />
        <Footer screen={screen} screenWidth={screenWidth} />
      </div>
    </div>
  );
};

export default AboutPage;
