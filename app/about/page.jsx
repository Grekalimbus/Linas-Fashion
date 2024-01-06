"use client";
import Footer from "../components/common/Footer";
import Navbar from "../components/navbar/page";
import useScreenHandling from "../hooks/useScreenHandling";
import FirstBlock from "./firstBlock/page";
import SecondBlock from "./secondBlock/page";
import ThirdBlock from "./thirdBlock/page";

const AboutPage = () => {
  const { wrapperStyle, screen } = useScreenHandling();
  if (screen === 0) {
    return <div></div>;
  }

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} />

        <FirstBlock screen={screen} />
        <SecondBlock screen={screen} />
        <ThirdBlock screen={screen} />
        <Footer screen={screen} />
      </div>
    </div>
  );
};

export default AboutPage;
