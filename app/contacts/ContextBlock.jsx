import React, { useState } from "react";
import Form from "../common/Form";
import Button from "../common/Button";

const ContextBlock = () => {
  const image = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1053,fit=crop/linasyfhpf/contact_1-dOq06LnW9aIQP3pv.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1053,fit=crop/linasyfhpf/project2_2-AQE9v5D67auLDGv6.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1627,fit=crop/linasyfhpf/contact_3-YX49w6eMMkSbk1Gr.png",
  ];
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorsMessage] = useState(false);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setErrors(e.target.value.length >= 7 ? true : false);
    }
    if (e.target.name === "message") {
      setErrorsMessage(e.target.value.length >= 7 ? true : false);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value) === false) {
      setErrors(false);
    }
  };

  return (
    <div className="mx-auto h-[100vh] max-[1124px]:h-full flex  justify-center items-centre flex-col bg-[#04111b]">
      <div className="container mx-auto flex justify-center max-w-6xl max-[1124px]:flex-col max-[1124px]:w-[340px] w-full ">
        <div>
          <div className="flex  items-start ml-5">
            <img
              src={image[0]}
              alt="pic1"
              className="w-[187px] h-[178px] max-[1124px]:hidden"
            />
            <img
              src={image[1]}
              alt="pic2"
              className="w-[187px] h-[178px] ml-4 max-[1124px]:hidden"
            />
          </div>
          <h2 className="font-semibold text-7xl underline mt-20 max-[1124px]:text-5xl ml-4">
            +3145683245
          </h2>
          <h2 className="font-semibold text-7xl underline mt-5 max-[1124px]:text-3xl ml-4">
            thoemke@linas.com
          </h2>
          <Form
            name={"name"}
            placeholder={"Your name"}
            key={1}
            label={"Name"}
            onChange={onChange}
            value={`${state.name}`}
            color={"bg-gray-500 "}
            textColor={"text-black"}
            labelColor={"text-white"}
            colortErrorText={" text-white "}
          />
          <Form
            name={"email"}
            placeholder={"Your email adress"}
            key={2}
            label={"Your email"}
            onChange={onChange}
            value={`${state.email}`}
            color={"bg-gray-500"}
            textColor={"text-black"}
            labelColor={"text-white"}
            errorMessage={"Email is required field , and it must contain @"}
            errorsEmail={errors}
            colortErrorText={" text-white "}
          />
          <Form
            name={"message"}
            placeholder={"Your message"}
            label={"Message"}
            type={"text-area"}
            onChange={onChange}
            value={`${state.message}`}
            color={"bg-gray-500"}
            textColor={"text-black"}
            labelColor={"text-white"}
            errorsMessage={errorMessage}
            errorMessage={"Message is reqired field "}
            colortErrorText={" text-white "}
          />
          <Button
            type={"submit"}
            text={"Submit"}
            colorButton={"bg-yellow-500"}
            colorText={"text-black"}
          />
          <div className="flex mt-10 ml-3">
            <img
              src={image[0]}
              alt="pic1"
              className="w-[161px] h-[157px] object-cover mr-3 hidden max-[1124px]:block"
            />
            <img
              src={image[1]}
              alt="pic2"
              className="w-[161px] h-[157px] object-cover hidden max-[1124px]:block"
            />
          </div>
        </div>
        <img
          src={image[2]}
          alt="pic3"
          className="w-[30%] object-contain mt-[120px] ml-10 max-[1123px]:w-[334px] max-[1124px]:h-[494px] max-[1124px]:ml-3 max-[1124px]:mt-3  max-[1124px]:object-fill"
        />
      </div>
    </div>
  );
};

export default ContextBlock;
