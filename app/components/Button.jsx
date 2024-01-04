const Button = ({text, type}) => {
  return (
    <div>
      <button
        type={type}
        className="w-[134px] h-[51px] text-white bg-black xl:ml-4 sm:ml-1 lg:ml-4 md:ml-4"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
