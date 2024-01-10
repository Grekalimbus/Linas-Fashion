import Form from "../common/Form";
import Button from "../common/Button";
import inputs from "../api/Inputs";
import {useState} from "react";
const SixthDisplay = () => {
  const [values, setValue] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const image = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=669,fit=crop/linasyfhpf/project4_4-Y4Lg6q9MlPir3Lnk.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1025,fit=crop/linasyfhpf/Home_16-A1aNL7L2WpFoqz7K.png",
  ];
  const [errors, setErrors] = useState(false);
  const [errosMessage, setErrorsMessage] = useState(false);
  const onChange = (e) => {
    setValue({...values, [e.target.name]: e.target.value});

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
    <div className="mx-auto h-[100vh] w-full flex justify-center  items-centre max-[1124px]:h-full bg-white my-20">
      <div className="container w-full flex justify-center items-center max-w-6xl max-[1124px]:flex-col max-[1124px]:mr-20 ml-20 max-[1124px]:ml-0">
        <div className="max-[1152px]:ml-20 ">
          <h1 className="font-semibold text-black text-8xl max-[1124px]:font-semibold max-[1124px]:text-6xl">
            Impressed?
          </h1>
          <p className="text-black font-medium text-[17px] mt-20">
            Let us cross paths - reach out and we'll work <br />
            on your next project together.
          </p>
          <div className="mt-20 flex ">
            <img
              src={image[0]}
              alt="pic1"
              className="w-[297px] h-[202px] object-cover max-[1124px]:hidden"
            />
            <img
              src={image[1]}
              alt="pic2"
              className="w-[194px] h-[202px] pl-3 object-cover max-[1124px]:hidden"
            />
          </div>
        </div>
        <div className="ml-20">
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
        <div className="flex mt-10 ml-20 max-[1124px]:ml-20">
          <img
            src={image[0]}
            alt="pic1"
            className="w-[161px] h-[173px] object-cover hidden max-[1124px]:block mr-3"
          />
          <img
            src={image[1]}
            alt="pic2"
            className="w-[161px] h-[173px] object-cover hidden max-[1124px]:block "
          />
        </div>
      </div>
    </div>
  );
};

export default SixthDisplay;
