"use client";
import ContextBlock from "./ContextBlock";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import useScreenHandling from "../hooks/useScreenHandling";

const page = () => {
  const { wrapperStyle, screen } = useScreenHandling();

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} />
        <ContextBlock screen={screen} />
        <Footer screen={screen} />
      </div>
    </div>
  );
};

export default page;
