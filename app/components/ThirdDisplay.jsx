const ThirdDisplay = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1582,fit=crop/linasyfhpf/Home_8-m5KgxNx9kwhwwqNW.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1034,fit=crop/linasyfhpf/Home_6-YyvLQNQb5bHZrQ2V.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1410,fit=crop/linasyfhpf/Home_7-AE0xXDXkxGuLqpgk.png",
  ];
  return (
    <div className="mx-auto  w-full h-[100vh] flex flex-col justify-center items-center max-[1124px]:h-full bg-[#04111b] ">
      <div className="container mx-auto w-full flex max-w-6xl max-[1124px]:w-[350px] max-[1124px]:flex-col relative max-[1124px]:justify-between my-20">
        <div className="flex flex-col ">
          <h1 className="text-white font-bold text-8xl w-[100px] max-[1124px]:text-7xl ">
            02
          </h1>
          <img
            src={images[2]}
            alt="model"
            className="relative w-[75%]  z-[0] object-cover mt-[10px] ml-[160px] max-[1124px]:order-2 max-[1152px]:ml-0 max-[1124px]:mt-10"
          />
          <img
            src={images[1]}
            alt="flower"
            className=" flex z-[1] w-[25%] object-cover absolute top-[260px] max-[1124px]:order-2 max-[1124px]:z-[0] max-[1124px]:top-0 max-[1124px]:relative max-[1124px]:mt-10 max-[1124px]:w-[60%]"
          />
          <h1 className="font-semibold mt-20 max-[1152px]:mt-10">
            FLOWER GARDEN
          </h1>
          <p className="font-light mt-1 underline  ">
            Learn more about the project →
          </p>
          <p className=" font-light w-[140px] absolute z-[1] right-10 bottom-10 max-[1124px]:right-20 max-[1124px]:bottom-4">
            Model: Jake James
          </p>
        </div>
        <img
          src={images[0]}
          alt="model1"
          className="w-[47%] ml-20 static max-[1124px]:order-0 max-[1124px]:mt-10 max-[1124px]:w-[80%] max-[1124px]:ml-0"
        />
      </div>
    </div>
  );
};

export default ThirdDisplay;
