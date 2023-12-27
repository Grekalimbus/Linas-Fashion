import React from "react";

const FirstDisplay = () => {
  return (
    <div className="w-full mx-auto h-svh bg-[#04111b] pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="h-full flex justify-between">
          <div className="flex flex-col">
            <div className="flex space-x-3">
              <div>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
                  alt="image1"
                />
              </div>
              <div>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
                  alt="image2"
                />
              </div>
            </div>
            <span style={{ "font-size": "250px" }}>Linas</span>
            <div className="flex">
              <div>FASHION PHOTOGRAPHY | AMSTERDAM</div>
              <div>THOEMKE@LINAS.COM</div>
            </div>
          </div>
          <div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDisplay;
