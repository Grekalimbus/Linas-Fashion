import React, { useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Footer = ({ screen }) => {
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetMedium],
    animationNamesArray: ["animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);
  return screen <= 1152 ? (
    <div className="w-full flex justify-center items-center mx-auto bg-[#04111b] p-16">
      <div
        ref={targetMedium}
        className="flex flex-col max-w-[420px] justify-center items-center font-semibold opacity-0"
      >
        <p>LINAS THOEMKE </p>
        <p className="relative mt-4">
          THOEMKE@LINAS.COM
          <span className="self-end w-[100%] absolute left-0 right-0 bottom-1 h-[1px] bg-white transform"></span>
        </p>
        <p className="mt-2">+3145683245</p>
        <div className="w-[60%] flex justify-between mt-6">
          <FaTwitter className="w-[25px] h-[25px]"></FaTwitter>
          <FaFacebook className="w-[25px] h-[25px]"></FaFacebook>
          <FaInstagram className="w-[25px] h-[25px]"></FaInstagram>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mx-auto bg-[#04111b] p-16">
      <div
        ref={targetMedium}
        className="max-w-6xl mx-auto flex justify-between opacity-0"
      >
        <div className="flex justify-between w-[50%] font-semibold relative">
          <p>LINAS THOEMKE </p>
          <p>+3145683245</p>
          <p className="relative">
            THOEMKE@LINAS.COM
            <span className="self-end w-[100%] absolute left-0 right-0 bottom-1 h-[2px] bg-white transform"></span>
          </p>
        </div>
        <div className="flex justify-between w-[15%]">
          <FaTwitter className="w-[25px] h-[25px]"></FaTwitter>
          <FaFacebook className="w-[25px] h-[25px]"></FaFacebook>
          <FaInstagram className="w-[25px] h-[25px]"></FaInstagram>
        </div>
      </div>
    </div>
  );
};

export default Footer;
