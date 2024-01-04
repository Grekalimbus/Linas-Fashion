import Form from "./Form";
import Button from "./Button";
import inputs from "../api/Inputs";
import {useState} from "react";
const SixthDisplay = ({screen, screenWidth}) => {
  const [values, setValue] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setValue({...values, [e.target.name]: e.target.value});
  };

  return screenWidth <= 950 || screen <= 950 ? (
    <div className="mx-auto flex justify-center bg-white">
      <div className="container w-full flex justify-center mt-20 mb-20">
        <div>
          <h1 className="font-semibold text-black text-4xl">Impressed?</h1>
          <p className="text-black font-medium text-[17px] mt-10">
            Let us cross paths - reach out <br /> and we’ll work on your next
            <br /> project together.
          </p>
          <div className="">
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
                emailValue={values.email}
                messageValue={values.message}
              />
            ))}
            <Button text={"Submit"} type={"submit"} />
          </div>
          <div className="flex mt-10">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1160,fit=crop/linasyfhpf/project4_4-Y4Lg6q9MlPir3Lnk.png"
              alt="pic1"
              className="w-[161px] h-[173px] "
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1160,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png"
              alt="pic2"
              className="w-[161px] h-[173px] ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
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
        <div className="ml-[160px] lg:ml-[100px]">
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
              emailValue={values.email}
              messageValue={values.message}
            />
          ))}
          <Button text={"Submit"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export default SixthDisplay;
