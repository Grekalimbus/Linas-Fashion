const Form = ({
  name,
  placeholder,
  label,
  type,
  errorMessage,
  onChange,
  errorsEmail,
  errorsMessage,
  color,
  textColor,
  labelColor,
  colortErrorText,
}) => {
  return type === "text-area" ? (
    <div>
      <div className="container flex w-full ">
        <div className="flex ">
          <form className="p-4 ">
            <h2 className={`${labelColor} font-light pb-2`}>{label}</h2>
            <textarea
              onChange={onChange}
              name={name}
              cols="30"
              rows="10"
              placeholder={placeholder}
              className={`${color} ${textColor} xl:w-[503px] xl:h-[96px] lg:w-[503px] lg:h-[96px]  pl-2 pt-2 sm:w-[328px] sm:h-[96px] textarea`}
            ></textarea>
            {errorsMessage === false ? (
              <div>
                <span className={`${colortErrorText} pt-3`}>
                  {errorMessage}
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="container flex w-full ">
      <div className="flex ">
        <form action="#" className="p-4 ">
          <h2 className={`${labelColor} font-light pb-2`}>{label}</h2>
          <input
            onChange={onChange}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`${color} ${textColor} xl:w-[503px] xl:h-[48px] lg:w-[503px] lg:h-[48px] pl-2 border sm:w-[328px] sm:h-[48px]`}
          />
          {!errorsEmail ? (
            <div>
              <span className={`${colortErrorText} pt-3`}>{errorMessage}</span>
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
