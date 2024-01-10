"use client";
import Content from "./ContextBlock";
import {Navbar} from "../common/Navbar";
import Footer from "../common/Footer";
import useScreenHandling from "../hooks/useScreenHandling";

const page = () => {
  const {screen} = useScreenHandling();

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`w-full overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default page;
