import React, { useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Footer = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);
  return screenWidth <= 1152 || screen <= 1152 ? (
    <div className="w-full flex justify-center items-center mx-auto bg-[#04111b]">
      <div
        ref={targetRef}
        className="flex flex-col max-w-[420px] justify-center items-center py-10 font-semibold"
      >
        <p>LINAS THOEMKE </p>
        <p className="mt-4 border-b-2 border-white">THOEMKE@LINAS.COM</p>
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
      <div ref={targetRef} className="max-w-7xl mx-auto flex justify-between ">
        <div className="flex justify-between w-[50%] font-semibold">
          <p>LINAS THOEMKE </p>
          <p>+3145683245</p>
          <p className="border-b-2 border-white">THOEMKE@LINAS.COM</p>
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
