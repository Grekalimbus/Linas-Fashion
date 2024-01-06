const SmallDisplay = () => {
  return (
    <div className="w-full flex justify-center mx-auto min-h-min bg-[#04111b]">
      <div className="container max-w-[420px] mt-20 mb-20 flex justify-center">
        <div className="ml-20 ">
          <h2 className="font-light text-[17px]">I'VE WORKED WITH:</h2>
          <h1 className="font-semibold text-7xl mt-4">
            Frontera, Gucci, Versace, innocent smoothies, Presson, Kris.T,
            Fashiona, Grotesk, StyleX, Rubik, Spectral, Juno.
          </h1>
          <div className="flex">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1040,fit=crop/linasyfhpf/clients_1-A0xbgEz0nys4Zrxb.png"
              alt="pic1"
              className="w-[45%] object-contain mt-20"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=938,fit=crop/linasyfhpf/clients_2-YX49w6eMrvc9Wneq.png"
              alt="pic2"
              className=" ml-3 w-[45%] object-contain mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallDisplay;
