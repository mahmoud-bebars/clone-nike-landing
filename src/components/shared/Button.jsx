const Button = ({ title, icon, variant, border, text, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border  font-montserrat text-lg leading-none rounded-full 
      ${text ? text : "text-white"}
      ${border ? border : "border-coral-red"} ${
        variant ? variant : "bg-coral-red"
      } ${fullWidth && "w-full"} `}
    >
      {title}{" "}
      {icon && (
        <img
          src={icon}
          alt="button-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
