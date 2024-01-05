import {useRef} from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FourthDisplay = ({screen, screenWidth}) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef, "animate-slideUp");

  return screenWidth <= 1152 || screen <= 1152 ? (
    <div className="mx-auto flex justify-center">
      <div
        ref={targetRef}
        className="w-full container flex justify-center  items-left p-8"
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
            className="w-[328px] h-[439px] mt-20 object-contain"
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
            className="w-[328px] h-[278px] pb-5 object-contai"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=915,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
            alt="Model3"
            className="w-[100%] h-[278px] object-contain"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full bg-white flex justify-center">
      <div className="container w-full max-w-6xl flex justify-center">
        <div className="mt-20 mb-20 relative flex">
          <h1 className="text-black text-8xl font-semibold absolute z-[1] ml-10 mt-20">
            03
          </h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1740,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="pic1"
            className="w-[710px] h-[870px] static object-contain"
          />
          <div className="ml-[120px] mt-10">
            <h2 className="text-black font-light">
              Model: Yoko Yamada
              <br /> MUA: Jessie Gein
            </h2>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=548,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
              alt="img1"
              className="w-[400px] h-[234px] mt-3"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=744,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
              alt="img2"
              className="w-[400px] h-[410px] object-contain mt-2"
            />
            <h2 className="font-semibold text-black text-[17px] mt-2">
              SOMETHING IN THE AIR
            </h2>
            <p className="text-black font-light text-[17px] underline mt-5">
              Learn more about the project →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthDisplay;
