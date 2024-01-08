import AnimateWrap from "./AnimateWrap";

const FirstDisplay = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png",
  ];

  return (
    <div className="bg-[#04111b] w-full mx-auto h-[100vh] max-[1124px]:h-full pb-16 flex flex-col justify-center items-center">
      <div className="conteiner mx-auto flex justify-between w-full max-w-6xl  max-[1124px]:w-[340px] max-[1124px]:flex-col">
        <div className="flex flex-col justify-between ">
          <AnimateWrap
            tag="div"
            className="flex max-[1124px]:order-3 max-w-[340px] max-[1124px]:justify-between max-[1124px]:flex-row-reverse max-[1124px]:mt-8"
          >
            <img
              className="object-cover max-[1124px]:w-[48%]"
              src={images[0]}
              alt="image1"
            />
            <img
              className="object-cover ml-6 max-[1124px]:w-[48%] max-[1124px]:ml-0"
              src={images[1]}
              alt="image2"
            />
          </AnimateWrap>
          <AnimateWrap tag="div" className="flex max-[1124px]:order-1 flex-col">
            <h3 className="font-bold word-wrap block text-[200px] max-[1124px]:text-[100px] ">
              Linas
            </h3>
            <div className="flex justify-between max-[1124px]:text-[14px] max-[1124px]:flex-col">
              <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
              <p>THOEMKE@LINAS.COM</p>
            </div>
          </AnimateWrap>
          <AnimateWrap
            tag="img"
            className="hidden max-[1124px]:block order-2 mt-8"
            src={images[2]}
            alt="image3"
          />
        </div>

        <AnimateWrap
          tag="img"
          className="max-[1124px]:hidden"
          src={images[2]}
          alt="image3"
        />
      </div>
    </div>
  );
};

export default FirstDisplay;
