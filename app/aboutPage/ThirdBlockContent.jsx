import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Link from "next/link";

export const ThirdBlockContent = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);
  return screenWidth <= 950 || screen <= 950 ? (
    <div
      className="w-full flex flex-col justify-start items-center mx-auto h-[70vh] bg-[#04111b]  bg-cover bg-center text-black"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/linasyfhpf/about_4-AVLX0qj5O7Ux2V1g.png')",
      }}
    >
      <div className="flex flex-col justify-start items-start mt-12">
        <p className="text-black text-5xl font-semibold mt-4 text-center">
          Linas
        </p>
        <p className="text-black text-5xl font-semibold mt-2">Thoemke </p>
      </div>

      <p className="text-black  mt-6 text-lg">CREATIVE PROFESSIONAL </p>
      <p className="text-black mt-2 pl-36 text-lg">IMPRESSIVE CLIENTELE</p>
      <p className="text-black mt-2 text-lg">EXPERIENCED & FLEXIBLE</p>

      <Link
        className="font-medium mt-4 border-b-2 border-black text-2xl mr-8"
        href={"https://linasyfhpf.zyrosite.com/contacts"}
      >
        CONTACT ME →
      </Link>
    </div>
  ) : (
    <div className="mx-auto bg-[#04111b]  flex justify-center items-center pt-20 ">
      <div ref={targetRef} className="max-w-7xl mx-auto"></div>
    </div>
  );
};
