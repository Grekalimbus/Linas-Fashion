"use client";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import useScreenHandling from "../hooks/useScreenHandling";
import FirstBlockContent from "./FirstBlockContent";
import SecondBlockContent from "./SecondBlockContent";
import { ThirdBlockContent } from "./ThirdBlockContent";

const AboutPage = () => {
  const { screen } = useScreenHandling();
  if (screen === 0) {
    return <div></div>;
  }

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`w-full overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} />

        <FirstBlockContent screen={screen} />
        <SecondBlockContent screen={screen} />
        <ThirdBlockContent screen={screen} />
        <Footer screen={screen} />
      </div>
    </div>
  );
};

export default AboutPage;
