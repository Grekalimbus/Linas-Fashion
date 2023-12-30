const SecondDisplay = () => {
  return (
    <div className="container-xl xl:flex xl:justify-center lg:flex lg:justify-center md:justify-center md:flex">
      <div className="relative mt-20 ">
        <h1 className="absolute top-0 left-0 ml-10 mt-10 md:[mt-20px] z-10 color-black text-9xl md:text-7xl text-black">
          01
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="Anna1"
          className="static w-[709px] h-[805px] lg:w-[595px] lg:h-[676px] md:w-[553px] md:h-[605px]"
        />
        <p className="text-black z-[1] -mt-[57px] ml-10 text-sm color-black">
          CLIENT: "DARE" shoes
        </p>
      </div>
      <div className="ml-[110px] md:[ml-90px] mt-20 md:[mt-20] md:[20px]">
        <h2 className="mb-[40px] lg:[mb-30px] md:[mb-20px] text-black">
          Model: Anna Fenna <br />
          MUA: Jessie Gein
        </h2>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
          alt=""
          className="w-[400px] h-[569px] mt-20 lg:[mt-40px] lg:w-[335px] lg:h-[477px] md:w-[300px] md:h-[428px] md:[mt-0]"
        />
        <h4 className="font-light color-black mt-[65px] md:mt-[40px] text-black">
          HEAD OVER HEELS
        </h4>
        <a className="underline whitespace-normal cursor-pointer text-black">
          Learn more about the project
        </a>
      </div>
    </div>
  );
};

export default SecondDisplay;
