const ThirdDisplay = () => {
  return (
    <div className="mx-auto justify-center bg-[#04111b] pt-5 relative flex">
      <div className="w-full container static mt-10 flex justify-center">
        <div>
          <h1 className="color-white font-bold text-8xl w-[10%] ml-5">02</h1>
          <div className="flex relative">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1410,fit=crop/linasyfhpf/Home_7-AE0xXDXkxGuLqpgk.png"
              alt="ManModel"
              className="xl:w-[402px] xl:h-[576px] mt-20 ml-[190px] z-[0] static lg:w-[361px] lg:h-[517px] md:w-[307px] md:h-[440px] md:mt-5"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1034,fit=crop/linasyfhpf/Home_6-YyvLQNQb5bHZrQ2V.png"
              alt="Flower"
              className="absolute  w-[297px] h-[312px] z-10 flex  mt-[265px] lg:w-[266px] lg:h-[280px] md:w-[227px] md:h-[238px] md:mt-[180px] md:mr-20 "
            />
            <div className="z-10 absolute bottom-0">
              <h4 className="color-white text-medium">FLOWER GARDEN</h4>
              <a className="underline color-white font-medium">
                Learn more about the project →
              </a>
            </div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1582,fit=crop/linasyfhpf/Home_8-m5KgxNx9kwhwwqNW.png"
              alt="ModelMan2"
              className="xl:w-[503px] xl:h-[791px] mt-5 lg:w-[452px] lg:h-[710px] ml-[100px] md:w-[385px] md:h-[605px]static z-[0] "
            />
            <p className="font-sans color-white mr-5  mb-5 flex absolute right-0 bottom-0 shadow-sm">
              MUA: Jessie Gein
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdDisplay;
