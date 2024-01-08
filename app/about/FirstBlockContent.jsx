import AnimateWrap from "../components/AnimateWrap";
const FirstBlockContent = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_2-YZ9p0JvgNqUp30OP.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_3-m7VjgnGXpkhrMQN5.png",
  ];
  return (
    <div className="mx-auto bg-[#04111b] w-full flex justify-center items-center pb-16">
      <div className="container max-w-6xl flex justify-around mt-12 max-[1124px]:flex-col max-[1124px]:items-center">
        <AnimateWrap
          tag="img"
          className="w-[48%] h-[76vh] object-cover max-[1124px]:hidden"
          src={images[0]}
          alt="image1"
        />

        <div className="ml-20 max-[1124px]:ml-0 flex flex-col max-[1124px]:max-w-[340px] items-center">
          <AnimateWrap
            tag="img"
            className="hidden h-[47vh] object-cover max-[1124px]:order-2 max-[1124px]:block my-8"
            src={images[0]}
            alt="image1"
          />
          <AnimateWrap
            tag="div"
            className="h-[28%] flex justify-center max-[1124px]:order-3"
          >
            <img
              className="max-w-[42%] object-cover"
              src={images[1]}
              alt="image2"
            />

            <img
              className="ml-4 max-w-[100%] min-w-[52%] bg-cover bg-right-bottom	object-cover"
              src={images[2]}
              alt="image3"
            />
          </AnimateWrap>
          <AnimateWrap tag="div" className="max-[1124px]:order-1">
            <h3 className="text-8xl font-semibold mt-20  max-[1124px]:text-[50px] max-[1124px]:mt-6 max-[1124px]:font-bold">
              Capturing
            </h3>

            <h3 className="text-8xl font-semibold mt-2 ml-10  max-[1124px]:text-[50px] max-[1124px]:ml-0 max-[1124px]:font-bold">
              magic
            </h3>
            <p className="text-1xl mt-44 ml-6 max-[1124px]:mt-12">
              LINAS THOEMKE | FASHION PHOTOGRAPHY
            </p>
          </AnimateWrap>
        </div>
      </div>
    </div>
  );
};

export default FirstBlockContent;
