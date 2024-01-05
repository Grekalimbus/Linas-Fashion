import React, {useState} from "react";
import Form from "../components/Form";
import Button from "../components/Button";

const ContextBlock = ({screen, screenWidth}) => {
  const [state, setState] = useState({name: "", email: "", message: ""});
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorsMessage] = useState(false);
  const onChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
    if (e.target.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(e.target.value) === false) {
        setErrors(false);
      }
      setErrors(e.target.value.length >= 1 ? true : false);
    }
    if (e.target.name === "message") {
      setErrorsMessage(e.target.value.length >= 1 ? true : false);
    }
  };

  return screenWidth <= 1152 || screen <= 1152 ? (
    <div className="mx-auto flex justify-center items-centre  bg-[#04111b]">
      <div className="flex justify-center w-full max-w-[420px] mt-20 mb-20 ml-20">
        <div>
          <h1 className="text-white font-semibold text-3xl ml-3 underline">
            +3145683245
          </h1>
          <h2 className="text-white font-semibold text-3xl underline ml-3">
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
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1053,fit=crop/linasyfhpf/contact_1-dOq06LnW9aIQP3pv.png"
              alt="pic1"
              className="w-[40%]"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1053,fit=crop/linasyfhpf/project2_2-AQE9v5D67auLDGv6.png"
              alt="pic2"
              className="w-[40%] ml-2"
            />
          </div>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1627,fit=crop/linasyfhpf/contact_3-YX49w6eMMkSbk1Gr.png"
            alt="pic3"
            className="w-[80%] ml-3 mt-10"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full flex justify-center bg-[#04111b]">
      <div className="container max-w-6xl flex justify-center mt-20 mb-20">
        <div>
          <div className="flex left-0 items-start">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=388,h=368,fit=crop/linasyfhpf/contact_1-dOq06LnW9aIQP3pv.png"
              alt="pic1"
              className="w-[20%]"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=388,h=368,fit=crop/linasyfhpf/project2_2-AQE9v5D67auLDGv6.png"
              alt="pic2"
              className="w-[20%] ml-4"
            />
          </div>
          <h2 className="font-semibold text-7xl underline mt-20">
            +3145683245
          </h2>
          <h2 className="font-semibold text-7xl underline mt-5">
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
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=594,h=976,fit=crop/linasyfhpf/contact_3-YX49w6eMMkSbk1Gr.png"
          alt="pic3"
          className="w-[30%] object-contain mt-[120px] ml-10"
        />
      </div>
    </div>
  );
};

export default ContextBlock;
