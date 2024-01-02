import React, {useState} from "react";

const Form = ({text, type, placeholder}) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return type === "text-area" ? (
    <div>
      <div className="container flex w-full justify-end" key={text}>
        <div className="flex justify-end">
          <form className="p-4 mt-pt-4">
            <h2 className="text-black font-light pb-2">{text}</h2>
            <textarea
              name={text}
              cols="30"
              rows="10"
              placeholder={placeholder}
              className="bg-gray-200 w-[503px] h-[96px] text-black pl-2 pt-2"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="container flex w-full justify-end" key={text}>
      <div className="flex justify-end">
        <form action="#" className="p-4">
          <h2 className="text-black font-light pb-2">{text}</h2>
          <input
            id={text}
            onChange={(e) => handleChange(e)}
            type={type}
            placeholder={placeholder}
            className=" bg-gray-200 w-[503px] h-[48px] pl-2 text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
