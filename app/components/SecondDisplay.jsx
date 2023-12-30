const SecondDisplay = () => {
  return (
    <div className="xl:container-xl xl:flex xl:justify-center lg:container-lg lg:flex lg:justify-center md:container-md md:justify-center md:flex sm:flex-none">
      <div className="relative mt-20 ">
        <h1 className="xl:absolute lg:absolute md:absolute sm:relative top-0 left-0 ml-10 mt-10 md:[mt-20px] z-10 color-black xl:text-9xl lg:text-9xl md:text-7xl sm:text-8xl text-black">
          01
        </h1>
        <h4 className="font-light text-black xl:hidden lg:hidden md:hidden sm:visible">
          HEAD OVER HEELS
        </h4>
        <a className="underline whitespace-normal cursor-pointer text-black xl:hidden lg:hidden md:hidden sm:visible">
          Learn more about the project
        </a>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="Anna1"
          className="static w-[709px] h-[805px] lg:w-[595px] lg:h-[676px] md:w-[553px] md:h-[605px]"
        />
        <p className="text-black z-[1] -mt-[57px] ml-10 text-sm color-black">
          CLIENT: "DARE" shoes
        </p>
      </div>
      <div className="ml-[110px] md:[ml-90px] mt-20 ">
        <h2 className="mb-[40px] lg:[mb-30px] text-black ">
          Model: Anna Fenna <br />
          MUA: Jessie Gein
        </h2>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
          alt="Anna2"
          className="w-[400px] h-[569px] lg:[mt-40px] lg:w-[335px] lg:h-[477px] md:w-[300px] md:h-[428px] xl:mt-20 lg:mt-20  md:mt-0"
        />
        <h4 className="text-black mt-[45px] md:mt-10px">HEAD OVER HEELS</h4>
        <a className="text-black underline tracking-wide">
          Learn more about the project
        </a>
      </div>
    </div>
  );
};

export default SecondDisplay;
