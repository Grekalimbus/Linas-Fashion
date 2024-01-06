import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SecondDisplay = ({ screen }) => {
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetMedium],
    animationNamesArray: ["animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);

  return screen <= 1152 ? (
    <div className="mx-auto ">
      <div className="flex w-full justify-center items-center bg-white items-left p-8">
        <div ref={targetMedium} className="mt-20 mb-20 opacity-0">
          <h1 className="text-black font-bold text-6xl">01</h1>
          <h4 className="font-semibold text-black pt-5">HEAD OVER HEELS</h4>
          <a className="cursor-pointer underline text-black pt-5">
            Learn more about the project →
          </a>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1472,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Model1"
            className="w-[328px] h-[447px] mt-10 object-contain"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1559,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
            alt="Model2"
            className="w-[257px] h-[371px] pt-10 object-contain"
          />
          <h4 className="text-black font-medium mt-10">
            Model: Anna Fenna <br />
            MUA: Jessie Gein
          </h4>
          <p className="text-black font-mdeium pt-4">CLIENT: "DARE" shoes</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center items-center bg-white ">
      <div className="container w-full flex justify-center static mt-20 mb-20 max-w-6xl">
        <div ref={targetMedium} className="relative flex opacity-0">
          <h1 className="text-bold font-sans text-8xl text-black z-[1] absolute mt-5 ml-5">
            01
          </h1>
          <p className="text-black font-sans text-medium absolute z-[1] flex bottom-10 left-10 lg:bottom-20">
            CLIENT: "DARE" shoes
          </p>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Nodel1"
            className="w-[65%] static object-contain"
          />
          <div className="ml-10">
            <h4 className="text-black font-medium">
              Model: Anna Fenna <br />
              MUA: Jessie Gein
            </h4>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1138,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
              alt="Model2"
              className="w-[100%] mt-20 object-conatain"
            />
            <div className="mt-[120px]">
              <h4 className="text-black font-semibold ">HEAD OVER HEELS</h4>
              <a className="text-black underline font-medium mt-5">
                Learn more about the project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDisplay;
