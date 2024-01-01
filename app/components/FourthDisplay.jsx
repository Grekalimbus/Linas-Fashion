const FourthDisplay = () => {
  return (
    <div className="mx-auto flex justify-center mt-20">
      <div className="w-full container  flex justify-center static">
        <div className="relative flex">
          <h1 className="text-black text-8xl font-sans font-medium z-[1] absolute pt-10 pl-10">
            03
          </h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1740,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="Model1"
            className="w-[709px] h-[870px] z-0 static"
          />
          <div className="ml-20">
            <p className="text-black font-sans font-medium flex justify-end">
              Model: Yoko Yamada
            </p>
            <p className="text-black font-sans font-medium flex justify-end">
              MUA: Jessie Gein
            </p>

            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=548,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
              alt="Model2"
              className="w-[400px] h-[274px] mb-10 pt-10"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=744,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
              alt="Model3"
              className="w-[400px] h-[372px]"
            />
            <p className="font-medium text-black font-sans mt-[65px]">
              SOMETHING IN THE AIR
            </p>
            <p className="font-medium text-black font-sans underline">
              Learn more about the project →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthDisplay;
