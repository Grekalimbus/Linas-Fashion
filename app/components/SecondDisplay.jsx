const SecondDisplay = ({screenWidth, styleScreen}) => {
  console.log(styleScreen);
  return screenWidth <= 950 || styleScreen === "w-[360px]" ? (
    <div className="w-full flex justify-center items-center ">
      <div className="mt-20 ">
        <h1 className="text-black text-6xl ml-2">01</h1>
        <p className="font-bold text-black ml-3 mt-3">HEAD OVER HEELS</p>
        <p className="underline text-black font-medium ml-3 mt-2">
          Learn more about the project →
        </p>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="AnnaFirst"
          className="w-[328px] h-[447px] mt-10 ml-3"
        />
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png "
          alt="AnnaSecond"
          className="w-[257px] h-[371px] ml-3 mt-5"
        />
        <h2 className="text-black font-sans ml-3 mt-4 tracking-wide">
          Model: Anna Fenna <br /> MUA: Jessie Gein
        </h2>
        <p className="text-black font-sans ml-3 mt-1">CLIENT: "DARE" shoes</p>
      </div>
    </div>
  ) : (
    <div className="container-xl mx-auto xl:flex xl:justify-center lg:container-lg lg:flex lg:justify-center md:container-md md:justify-center md:flex main-div">
      <div className="relative mt-20  ">
        <h1 className="xl:absolute lg:absolute md:absolute sm:relative top-0 left-0 ml-10 mt-10 md:[mt-20px] z-10 color-black xl:text-9xl lg:text-9xl md:text-8xl sm:text-8xl text-black">
          01
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="Anna1"
          className="static w-[709px] h-[805px] lg:w-[595px] lg:h-[676px] md:w-[553px] md:h-[605px] "
        />
        <p className="text-black z-[1] -mt-[57px] ml-10 text-sm color-black ">
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
