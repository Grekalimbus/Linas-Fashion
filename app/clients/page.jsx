"use client";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import ContentBlock from "./ContentBlock";
import useScreenHandling from "../hooks/useScreenHandling";

const page = () => {
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
        <ContentBlock screen={screen} />
        <Footer screen={screen} />
      </div>
    </div>
  );
};

export default page;
