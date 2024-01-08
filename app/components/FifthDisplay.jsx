import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FifthDisplay = ({ screen }) => {
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetMedium],
    animationNamesArray: ["animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);

  return screen <= 1152 ? (
    <div className="ma-auto flex justify-center bg-[#fad003] ">
      <div
        ref={targetMedium}
        className="w-full container flex justify-center items-left p-8 opacity-0"
      >
        <div className="mt-20 mb-20">
          <h1 className="text-black font-bold text-6xl pt-5 ">01</h1>
          <h4 className="text-black font-semibold text-xl pt-5 w-[10%]">
            YELLOW
          </h4>
          <a className="font-sansi text-black pt-5 underline">
            Learn more about the project →
          </a>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1475,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png"
            alt="Model1"
            className="w-[328px] h-[448px] mt-10"
          />
          <div className="flex">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1402,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png"
              alt="model2"
              className="w-[161px] h-[209px] pt-5"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1420,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png"
              alt="model3"
              className="w-[159px] h-[209px] pt-5 ml-2"
            />
          </div>
          <div className="flex justify-between">
            <p className="text-black mt-2">MUA: Jessie Gein</p>
            <p className="text-black mt-2">Model: Anna Fena</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto bg-[#fad003]  flex justify-center items-center ">
      <div
        ref={targetMedium}
        className="container w-full flex justify-center relative mt-20 max-w-6xl  mb-20 opacity-0"
      >
        <h1 className="text-black font-bold text-8xl  top ml-20 w-[10%] h-[10%]">
          04
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1282,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png"
          alt="Model1"
          className="w-[35%] h-[20%] static z-[0] mt-[60px] ml-20  object-cover"
        />
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1242,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png"
          alt="Model2"
          className="absolute w-[25%] z-[1] bottom-20 left-[80px]  object-cover"
        />
        <div className="z-[1] absolute bottom-0 left-[80px]">
          <p className="text-black font-bold text-xl">YELLOW</p>
          <a className="text-black underline font-sansi cursor-pointer">
            Learn more about the project →
          </a>
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1554,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png"
          alt="Model3"
          className="w-[40%]  mb-[80px]  sm:ml-10 object-cover"
        />
        <p className="text-black font-sansi absolute z-[1] bottom-0">
          Model: Anna Fena
        </p>
        <p className="text-black font-sans absolute z-[1] right-0 bottom-0 mr-[150px]">
          MUA: Jessie Gein
        </p>
      </div>
    </div>
  );
};

export default FifthDisplay;
