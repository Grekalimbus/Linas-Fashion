const Button = ({text, type, colorButton, colorText}) => {
  return (
    <div>
      <button
        type={type}
        className={`${colorButton} ${colorText} w-[134px] h-[51px]  bg-black xl:ml-4 sm:ml-1 lg:ml-4 md:ml-4`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
