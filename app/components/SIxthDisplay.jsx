import Form from "./Form";
const SixthDisplay = () => {
  return (
    <div className="mx-auto flex justify-center  bg-white">
      <div className="container w-full flex justify-center mt-20 mb-20">
        <div className="">
          <h1 className="font-semibold text-black text-8xl">Impressed?</h1>
          <p className="text-black font-medium text-[17px] mt-20">
            Let us cross paths - reach out and we'll work <br />
            on your next project together.
          </p>
          <div className="mt-20 flex ">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=669,fit=crop/linasyfhpf/project4_4-Y4Lg6q9MlPir3Lnk.png"
              alt="pic1"
              className="w-[297px] h-[202px]"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1025,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png"
              alt="pic2"
              className="w-[194px] h-[202px] pl-3"
            />
          </div>
        </div>
        <div className="ml-[160px]">
          <Form text={"Name"} type={"text"} placeholder={"Your name"} />
          <Form
            text={"Last name"}
            type={"text"}
            placeholder={"Your last name"}
          />
          <Form
            text={"Your email"}
            type={"text"}
            placeholder={"Your email address"}
          />
          <Form
            text={"Message"}
            type={"text-area"}
            placeholder={"Enter your message"}
          />
        </div>
      </div>
    </div>
  );
};

export default SixthDisplay;
