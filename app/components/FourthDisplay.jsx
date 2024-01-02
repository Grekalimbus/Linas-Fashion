import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FourthDisplay = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);

  return screenWidth <= 950 || screen <= 950 ? (
    <div className="mx-auto flex justify-center">
      <div
        ref={targetRef}
        className="w-full container flex justify-center opacity-0"
      >
        <div className="mt-20 mb-20">
          <h1 className="text-black text-6xl font-bold">03</h1>
          <h4 className="text-black font-sans pt-5 font-semibold">
            SOMETHING IN THE AIR
          </h4>
          <a className="text-black font-medium cursor-pointer underline pt-3">
            Learn more about the project →
          </a>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1445,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="Model1"
            className="w-[328px] h-[439px] mt-20"
          />
          <p className="font-sansi text-black flex justify-end mt-10">
            Model: Yoko Yamada
          </p>
          <p className="font-sansi text-black flex justify-end mb-20">
            MUA: Jessie Gein
          </p>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=915,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
            alt="Model2"
            className="w-[328px] h-[278px] pb-5"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=915,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
            alt="Model3"
            className="w-[328px] h-[278px]"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center ">
      <div
        ref={targetRef}
        className="w-full container  flex justify-center static opacity-0"
      >
        <div className="relative flex mt-20 mb-20">
          <h1 className="text-black text-8xl font-sans font-medium z-[1] absolute pt-10 pl-10">
            03
          </h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1740,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="Model1"
            className="w-[709px] h-[870px] z-0 static lg:w-[583px] lg:h-[716px] md:w-[544px] md:h-[668px]"
          />
          <div className="ml-20">
            <p className="text-black font-sans font-medium flex justify-end">
              Model: Yoko Yamada
            </p>
            <p className="text-black font-sans font-medium flex justify-end">
              MUA: Jessie Gein
            </p>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=548,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
              alt="Model2"
              className="w-[400px] h-[274px] mb-10 pt-10 lg:w-[329px] lg:h-[225px] md:w-[307px] md:h-[210px]"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=744,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
              alt="Model3"
              className="w-[400px] h-[372px] lg:w-[329px] lg:h-[306px] md:w-[307px] md:h-[285px]"
            />
            <p className="font-semibold text-black font-sans mt-[65px]">
              SOMETHING IN THE AIR
            </p>
            <p className="font-medium text-black font-sans underline">
              Learn more about the project →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthDisplay;
