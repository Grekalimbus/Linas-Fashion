const SecondDisplay = () => {
  console.log(333);
  return (
    <div className="container flex justify-center items-center ">
      <div className="relative">
        <h1 className="absolute top-0 left-0 ml-10 mt-10 z-10 color-black text-9xl text-black">
          01
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="Anna1"
          width={709}
          height={805}
          className="static "
        />
        <p className="text-black z-[1] -mt-[57px] ml-10 text-sm color-black">
          CLIENT: "DARE" shoes
        </p>
      </div>
      <div className="ml-[110px] mt-20">
        <h2 className="mb-[40px] text-black">
          Model: Anna Fenna <br />
          MUA: Jessie Gein
        </h2>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
          alt=""
          width={400}
          height={569}
          className="w-[400px] h-[569px]"
        />
        <h4 className="font-light color-black mt-10 text-black">
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
