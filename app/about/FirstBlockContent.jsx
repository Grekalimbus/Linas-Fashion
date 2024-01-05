import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FirstBlockContent = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  const targetMiddleRef = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetRef, targetMiddleRef],
    animationNamesArray: ["animate-slideUp-top", "animate-slideUp-low"],
  };

  useIntersectionObserver(animationsAndRefs);

  return screenWidth <= 1152 || screen <= 1152 ? (
    <div className="w-full flex justify-center mx-auto min-h-min bg-[#04111b] text-white">
      <div
        ref={targetRef}
        className="flex flex-col max-w-[420px] justify-center p-8"
      >
        <h3 className="font-bold word-wrap block text-5xl">Capturing magic</h3>
        <p>LINAS THOEMKE | </p>
        <p>FASHION </p>
        <p>PHOTOGRAPHY </p>
        <img
          className="mt-10"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png"
          alt="image"
        />
        <div ref={targetMiddleRef} className="w-full flex justify-between mt-4">
          <div className="w-[48%]">
            <img
              className="w-full h-auto"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_2-YZ9p0JvgNqUp30OP.png"
              alt="image2"
            />
          </div>

          <div className="w-[48%]">
            <img
              className="w-full h-full"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_3-m7VjgnGXpkhrMQN5.png"
              alt="image1"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto bg-[#04111b] w-full flex justify-center items-center pb-16">
      <div
        ref={targetRef}
        className="container max-w-6xl flex justify-around relative mt-12"
      >
        <img
          className="w-[48%] h-[76vh] object-cover"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png"
          alt="image1"
        />

        <div ref={targetMiddleRef} className="ml-20">
          <div className="h-[28%] flex justify-center">
            <img
              className="max-w-[42%] object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_2-YZ9p0JvgNqUp30OP.png"
              alt="image2"
            />

            <img
              className="ml-4 max-w-[100%] min-w-[52%] bg-cover bg-right-bottom	object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_3-m7VjgnGXpkhrMQN5.png"
              alt="image3"
            />
          </div>
          <div>
            <h3 className="text-8xl font-semibold mt-20">Capturing </h3>

            <h3 className="text-8xl font-semibold mt-2 ml-10">magic</h3>
            <p className="text-1xl mt-44 ml-6">
              LINAS THOEMKE | FASHION PHOTOGRAPHY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlockContent;
