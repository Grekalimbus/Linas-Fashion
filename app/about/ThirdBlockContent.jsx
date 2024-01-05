import { useRef } from "react";
import Link from "next/link";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const ThirdBlockContent = ({ screen }) => {
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetMedium],
    animationNamesArray: ["animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);

  return screen <= 1152 ? (
    <div
      ref={targetMedium}
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
        className="font-medium mt-4 text-2xl mr-8 relative"
        href={"https://linasyfhpf.zyrosite.com/contacts"}
      >
        CONTACT ME →
        <span className="absolute left-0 right-0 bottom-1 h-[2px] bg-black transform "></span>
      </Link>
    </div>
  ) : (
    <div
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/linasyfhpf/about_4-AVLX0qj5O7Ux2V1g.png')",
      }}
      className="mx-auto w-full flex justify-center items-start text-black bg-cover bg-center h-[115vh] object-cover pt-12"
    >
      <div
        ref={targetMedium}
        className="w-full relative text-black mx-auto max-w-6xl flex flex-col justify-center items-cente"
      >
        <div className=" w-full flex justify-between text-black text-lg ">
          <p>CREATIVE PROFESSIONAL </p>
          <p>EXPERIENCED & FLEXIBLE</p>
          <p>IMPRESSIVE CLIENTELE</p>
        </div>
        <div className="self-center ml-[220px]  mt-[120px] flex flex-col items-start text-8xl font-semibold">
          <p>Linas</p>
          <p className="mt-[15px]">Thoemke</p>
        </div>
        <button className="mt-20 text-2xl self-center relative">
          CONTACT ME →
          <span className="absolute left-0 right-0 bottom-1 h-[2px] bg-black transform "></span>
        </button>
      </div>
    </div>
  );
};
