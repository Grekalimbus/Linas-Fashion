import Button from "../components/common/Button";
import Form from "../components/common/Form";
import { useState } from "react";
import { motion } from "framer-motion";

const SmallDisplay = () => {
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
    <div className="mx-auto flex justify-center items-centre  bg-[#04111b]">
      <div className="flex justify-center w-full max-w-[420px] mt-20 mb-20 ml-20 ">
        <div>
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white font-semibold text-3xl ml-3 underline">
              +3145683245
            </h1>
            <h2 className="text-white font-semibold text-3xl underline ml-3">
              thoemke@linas.com
            </h2>
          </motion.div>
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
          <motion.div
            className="flex mt-10 ml-3"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1627,fit=crop/linasyfhpf/contact_3-YX49w6eMMkSbk1Gr.png"
            alt="pic3"
            className="w-[80%] ml-3 mt-10"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallDisplay;
