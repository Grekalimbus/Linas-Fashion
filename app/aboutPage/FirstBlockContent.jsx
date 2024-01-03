import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FirstBlockConten = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);

  return screenWidth <= 950 || screen <= 950 ? (
    <div className="w-full flex justify-center mx-auto min-h-min bg-[#04111b]">
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
        <div className="w-full flex justify-between mt-4">
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
    <div className="mx-auto bg-[#04111b]  flex justify-center items-center pt-20 ">
      <div ref={targetRef} className="max-w-7xl mx-auto">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png"
          alt=""
        />
        <div>Flex</div>
      </div>
    </div>
  );
};

export default FirstBlockConten;
