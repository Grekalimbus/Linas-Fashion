"use client";
import {Navbar} from "../common/Navbar";
import Footer from "../common/Footer";
import ContentBlock from "./ContentBlock";

const page = () => {
  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`w-full overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar />
        <ContentBlock />
        <Footer />
      </div>
    </div>
  );
};

export default page;
