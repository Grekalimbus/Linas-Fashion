"use client";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import useScreenHandling from "../hooks/useScreenHandling";
import FirstBlockConten from "./FirstBlockContent";
import SecondBlockContent from "./SecondBlockContent";

const AboutPage = () => {
  const { screenWidth, wrapperStyle, screen, handleScreenChange } =
    useScreenHandling();

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      {screen >= 950 ? (
        <Header
          screenWidth={screenWidth}
          handleScreenChange={handleScreenChange}
        />
      ) : (
        <></>
      )}
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} screenWidth={screenWidth} />

        <FirstBlockConten screen={screen} screenWidth={screenWidth} />
        <SecondBlockContent screen={screen} screenWidth={screenWidth} />
      </div>
    </div>
  );
};

export default AboutPage;
