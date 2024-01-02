import React, {useState} from "react";

const Form = ({name, placeholder, label, type, onChange}) => {
  return type === "text-area" ? (
    <div>
      <div className="container flex w-full justify-end">
        <div className="flex justify-end">
          <form className="p-4 mt-pt-4 ">
            <h2 className="text-black font-light pb-2">{label}</h2>
            <textarea
              onChange={onChange}
              name={name}
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
    <div className="container flex w-full justify-end">
      <div className="flex justify-end">
        <form action="#" className="p-4 ">
          <h2 className="text-black font-light pb-2">{label}</h2>
          <input
            name={name}
            onChange={onChange}
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
