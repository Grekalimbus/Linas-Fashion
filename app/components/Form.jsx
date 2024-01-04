import {useState} from "react";

const Form = ({
  name,
  placeholder,
  label,
  type,
  errorMessage,
  onChange,
  errorsEmail,
  errorsMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return type === "text-area" ? (
    <div>
      <div className="container flex w-full justify-end">
        <div className="flex justify-end">
          <form className="p-4 mt-pt-4">
            <h2 className="text-black font-light pb-2">{label}</h2>
            <textarea
              onChange={onChange}
              name={name}
              cols="30"
              rows="10"
              placeholder={placeholder}
              className="bg-gray-200 xl:w-[503px] xl:h-[96px] lg:w-[503px] lg:h-[96px] text-black pl-2 pt-2 sm:w-[328px] sm:h-[96px] textarea"
            ></textarea>
            {errorsMessage === false ? (
              <div>
                <span className="text-black pt-3">{errorMessage}</span>
              </div>
            ) : (
              <div></div>
            )}
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
            onChange={onChange}
            name={name}
            type={type}
            placeholder={placeholder}
            className=" bg-gray-200 xl:w-[503px] xl:h-[48px] lg:w-[503px] lg:h-[48px] pl-2 text-black border sm:w-[328px] sm:h-[48px]"
          />
          {errorsEmail === false ? (
            <div>
              <span className="text-black pt-3">{errorMessage}</span>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
