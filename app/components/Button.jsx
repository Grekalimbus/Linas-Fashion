const Button = ({text, type, colorButton, colorText}) => {
  return (
    <div className="">
      <button
        type={type}
        className={`${colorButton} ${colorText} w-[134px] h-[51px]   xl:ml-4 sm:ml-3 lg:ml-4 md:ml-4`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
