import React, {useState} from "react";
import Form from "../components/Form";

const ContextBlock = ({screen, screenWidth}) => {
  const [state, setState] = useState({name: "", email: "", message: ""});
  const onChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  };

  return (
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
          <h2 className="font-semibold text-8xl underline mt-20">
            +3145683245
          </h2>
          <h2 className="font-semibold text-8xl underline mt-4">
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
          />
        </div>
      </div>
    </div>
  );
};

export default ContextBlock;
