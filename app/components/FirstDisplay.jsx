import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const FirstDisplay = ({ screen, screenWidth }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.classList.add("animate-slideUp");
    }
  }, [screenWidth, screen]);

  return screenWidth <= 950 || screen <= 950 ? (
    <div
      className={`w-full flex justify-center items-center mx-auto h-svh bg-[#04111b] pt-10`}
    >
      <div
        ref={elementRef}
        className="flex flex-col max-w-[360px] justify-center items-center"
      >
        <h3 className="font-bold word-wrap block" style={{ fontSize: "80px" }}>
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
    <div className="w-full mx-auto h-svh bg-[#04111b] pt-10">
      <div ref={elementRef} className="max-w-7xl mx-auto">
        <div className="h-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex space-x-3">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
                alt="image1"
              />

              <img
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
          <div className="w-6/12">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDisplay;
