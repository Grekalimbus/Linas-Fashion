import React from "react";

const Features = () => {
  return (
    <div className="bg-white w-[1340px] flex ">
      <div className="pt-20 ">
        <h1 className={`text-8xl absolute mt-8 ml-8`}>01</h1>
        <h2 className="absolute bottom-[13%] ml-[35px] ">
          CLIENT:"DARE" shoes
        </h2>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="firstImg"
          className="w-[705px] h-[805px]"
        />
      </div>
      <div className="ml-40 mt-20 pt-3">
        <p className="text-black">Model: Anna Fenna</p>
        <p className="text-black pt-2">MUA: Jessie Gein</p>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
          alt="secondImg"
          width={400}
          height={569}
          className="mt-20"
        />
        <h2 className="text-1xl mt-10">HEAD OVER HEELS</h2>
        <a
          href="/"
          className="text-sm hover:underline transition ease-out cursor-pointer"
        >
          Learn more about the project
        </a>
      </div>
    </div>
  );
};

export default Features;
