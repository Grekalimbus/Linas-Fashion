import Form from "./Form";
import Button from "./Button";
import inputs from "../api/Inputs";
import { useState, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SixthDisplay = ({ screen }) => {
  const targetMedium = useRef(null);

  const animationsAndRefs = {
    refsArray: [targetMedium],
    animationNamesArray: ["animate-slideUp-medium"],
  };

  useIntersectionObserver(animationsAndRefs);

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

  return screen <= 1152 ? (
    <div className="mx-auto flex justify-center bg-white">
      <div
        ref={targetMedium}
        className="container w-full flex justify-center mt-20 mb-20 opacity-0"
      >
        <div>
          <h1 className="font-semibold text-black text-4xl ml-2">Impressed?</h1>
          <p className="text-black font-medium text-[17px] mt-10 ml-2">
            Let us cross paths - reach out <br /> and we’ll work on your next
            <br /> project together.
          </p>
          <div>
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
                color={"bg-gray-200"}
                textColor={"text-black"}
                labelColor={"text-black"}
              />
            ))}
            <Button
              text={"Submit"}
              type={"submit"}
              colorButton={" bg-black "}
              colorText={" text-white "}
            />
          </div>
          <div className="flex mt-10">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1160,fit=crop/linasyfhpf/project4_4-Y4Lg6q9MlPir3Lnk.png"
              alt="pic1"
              className="w-[161px] h-[173px] object-cover "
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1160,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png"
              alt="pic2"
              className="w-[161px] h-[173px] ml-2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto flex justify-center  bg-white ml-10">
      <div
        ref={targetMedium}
        className="container w-full flex justify-center  max-w-6xl ml-10 mt-20 mb-20 opacity-0"
      >
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
              className="w-[297px] h-[202px] object-cover"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1025,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png"
              alt="pic2"
              className="w-[194px] h-[202px] pl-3 object-cover"
            />
          </div>
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

export default SixthDisplay;
