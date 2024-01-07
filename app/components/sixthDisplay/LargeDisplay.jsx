"use client";
import Form from "../common/Form";
import Button from "../common/Button";
import inputs from "@/app/api/Inputs";
import { motion } from "framer-motion";

import { useState } from "react";
const LargeDisplay = () => {
  const [values, setValue] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState(false);
  const [errosMessage, setErrorsMessage] = useState(false);
  const onChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });

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
    <div className="mx-auto flex justify-center  bg-white ml-10">
      <div className="container w-full flex justify-center  max-w-6xl ml-10 mt-20 mb-20 ">
        <div className="">
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-semibold text-black text-8xl">Impressed?</h1>
            <p className="text-black font-medium text-[17px] mt-20">
              Let us cross paths - reach out and we'll work <br />
              on your next project together.
            </p>
          </motion.div>
          <motion.div
            className="mt-20 flex "
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=669,fit=crop/linasyfhpf/project4_4-Y4Lg6q9MlPir3Lnk.png"
              alt="pic1"
              className="w-[297px] h-[202px] object-cover"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1025,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png"
              alt="pic2"
              className="w-[194px] h-[202px] pl-3 object-cover"
            />
          </motion.div>
        </div>
        <div className="md:ml-[80px]">
          {inputs.map((item) => (
            <Form
              key={item.id}
              name={item.name}
              palceholder={item.palceholder}
              label={item.label}
              type={item.type}
              value={values[item.name]}
              errorMessage={item.errorMessage}
              onChange={onChange}
              data={values}
              errorsEmail={errors}
              errorsMessage={errosMessage}
              color={" bg-gray-200 "}
              textColor={" text-black "}
              labelColor={" text-black "}
              colortErrorText={" text-black "}
            />
          ))}
          <Button
            text={"Submit"}
            type={"submit"}
            colorButton={"bg-black"}
            colorText={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default LargeDisplay;
