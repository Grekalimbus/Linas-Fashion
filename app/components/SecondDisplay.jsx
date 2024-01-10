const SecondDisplay = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1472,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1559,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png",
  ];

  return (
    <div className="mx-auto bg-white w-full h-[100vh] flex flex-col justify-center items-center max-[1124px]:h-full py-20">
      <div className="container mx-auto w-full flex max-w-6xl max-[1124px]:w-[350px] max-[1124px]:flex-col relative ">
        <h1 className="text-8xl text-black absolute z-[1] mt-10 ml-10 max-[1124px]:order-0 max-[1124px]:relative max-[1124px]:ml-0 mb-5 max-[1124px]:text-7xl font-semibold max-[1124px]:mt-0 ">
          01
        </h1>
        <img
          src={images[0]}
          alt="model1"
          className="object-cover w-[65%] static z-[0] max-[1124px]:w-[110%] max-[1124px]:order-3 max-[1124px]:ml-2 max-[1124px]:mt-[20px]"
        />
        <h2 className="text-black font-light absolute z-[1] bottom-10 left-10 max-[1124px]:relative max-[1124px]:left-1.5 mt-10 max-[1124px]:order-4 max-[1124px]:z-[0] ">
          CLIENT: "DARE" shoes
        </h2>
        <div className="ml-10 max-[1124px]:flex flex-col justify-center items-center max-[1124px]:ml-2 max-[1124px]:order-2">
          <h2 className="text-black font-light ml-4 h-[50px] max-[1124px]:hidden">
            Model: Anna Fenna <br />
            MUA: Jessie Gein
          </h2>
          <img
            src={images[1]}
            alt="Model2"
            className="object-cover w-[100%] mt-20 ml-4 max-[1124px]:w-[80%]  max-[1124px]:hidden"
          />
          <p className="font-semibold text-black mt-[220px] ml-4 max-[1124px]:order-first max-[1124px]:mt-0 max-[1124px]:mr-[185px]  max-[1124px]:ml-[0px]">
            HEAD OVER HEELS
          </p>
          <p className="font-light text-black ml-4 underline mt-2 max-[1124px]:order-second max-[1124px]:mr-[110px] max-[1124px]:ml-[0px] ">
            Learn more about the project →
          </p>
        </div>
        <img
          src={images[1]}
          alt="Model2"
          className="mt-10 max-[1124px]:block hidden order-3 max-[1124px]:w-[80%] max-[1124px]:ml-[8px] "
        />
        <h2 className="hidden max-[1124px]:block text-black font-light h-[50px] ml-2 mt-3 max-[1124px]:order-3 ">
          Model: Anna Fenna <br />
          MUA: Jessie Gein
        </h2>
      </div>
    </div>
  );
};

export default SecondDisplay;
