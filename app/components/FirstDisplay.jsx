import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FirstDisplay = ({ screen }) => {
  const targetLarg = useRef(null);
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetLarg, targetMedium],
    animationNamesArray: ["animate-slideUp-large", "animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);

  return screen <= 1152 ? (
    <div className="w-full flex justify-center items-center mx-auto h-svh bg-[#04111b] pt-10">
      <div
        ref={targetLarg}
        className="flex flex-col max-w-[420px] justify-center items-left p-8 pb-40"
      >
        <h3
          className="font-bold word-wrap block"
          style={{ fontSize: "80px", color: "white" }}
        >
          Linas
        </h3>
        <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
        <p>THOEMKE@LINAS.COM</p>
        <img
          className="my-4"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
        <div className="w-full flex justify-between ">
          <div className="w-[48%]">
            <img
              className="w-full h-auto"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </div>

          <div className="w-[48%]">
            <img
              className="w-full h-full"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mx-auto bg-[#04111b] pb-32 pt-16">
      <div className="conteiner max-w-6xl mx-auto flex justify-between">
        <div ref={targetMedium} className="flex flex-col justify-between">
          <div className="flex space-x-3">
            <img
              className="object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />

            <img
              className="object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </div>
          <div>
            <h3
              className="font-bold word-wrap block"
              style={{ fontSize: "200px" }}
            >
              Linas
            </h3>
            <div className="flex justify-between">
              <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
              <p>THOEMKE@LINAS.COM</p>
            </div>
          </div>
        </div>

        <img
          ref={targetLarg}
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
      </div>
    </div>
  );
};

export default FirstDisplay;
