import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FirstDisplay = () => {
  return (
    <div className="w-full mx-auto bg-[#04111b]  p-12">
      <div className="conteiner p-16 h-full mx-auto lg:grid grid-rows-3  grid-cols-2 gap-x-40 gap-y-2 grid-flow-col-dense max-w-7xl">
        <div className=" flex row-span-1 w-max h-[90%]">
          <img
            className="object-cover w-[65%]"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
            alt="image1"
          />
          <img
            className="object-cover ml-4"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
            alt="image2"
          />
        </div>
        <div className=" row-span-2 flex flex-col justify-between">
          <h3 className=" min-h-[50px]  text-[200px] font-bold mt-[90px]">
            Linas
          </h3>
          <div className=" min-h-[50px] flex items-end">
            <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
            <p className="ml-8">THOEMKE@LINAS.COM</p>
          </div>
        </div>

        <img
          className="flex justify-end row-span-3"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
      </div>
    </div>
  );
};

{
  /* <div className="flex  border-2 border-white  row-span-1">
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

        <h3 className=" font-bold text-[200px] h-min max-[1152px]:text-[180px]">
          Linas
        </h3>

        <div className="  max-[1152px]:text-[14px]">
          <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
          <p className="ml-4">THOEMKE@LINAS.COM</p>
        </div>
        <img
          className=" border-2 border-white object-cover  max-[1152px]:h-[73vh]"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        /> */
}

export default FirstDisplay;
