import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SecondDisplay = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);

  return screenWidth <= 1152 || screen <= 1152 ? (
    <div ref={targetRef} className="mx-auto opacity-0">
      <div className="flex w-full justify-center items-center bg-white items-left p-8">
        <div className="mt-20 mb-20">
          <h1 className="text-black font-bold text-6xl">01</h1>
          <h4 className="font-semibold text-black pt-5">HEAD OVER HEELS</h4>
          <a className="cursor-pointer underline text-black pt-5">
            Learn more about the project →
          </a>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1472,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Model1"
            className="w-[328px] h-[447px] mt-10"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1559,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
            alt="Model2"
            className="w-[257px] h-[371px] pt-10"
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
    <div
      ref={targetRef}
      className="mx-auto flex justify-center items-center bg-white opacity-0"
    >
      <div className="container w-full flex justify-center static mt-20 mb-20">
        <div className="relative flex">
          <h1 className="text-bold font-sans text-8xl text-black z-[1] absolute mt-5 ml-5">
            01
          </h1>
          <p className="text-black font-sans text-medium absolute z-[1] flex bottom-10 left-10 lg:bottom-20">
            CLIENT: "DARE" shoes
          </p>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Nodel1"
            className="w-[709px] h-[805px] static lg:w-[579px] lg:h-[657px] sm:w-[539px] sm:h-[611px]"
          />
          <div className="ml-10">
            <h4 className="text-black font-medium">
              Model: Anna Fenna <br />
              MUA: Jessie Gein
            </h4>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1138,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
              alt="Model2"
              className="w-[400px] h-[569px] mt-20 lg:w-[327px] lg:h-[465px] sm:w-[304px] sm:h-[432px] "
            />
            <div className="mt-[24px]">
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
