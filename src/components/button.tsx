const Button = ({
  children,
  onClick,
  disabled = false,
}: {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="ease flex items-center 
      justify-center rounded-md bg-violet-500 py-2 px-16 font-medium 
      text-white outline-1 outline-offset-2 outline-violet-400 transition-all
      duration-[50ms] focus:outline focus:outline-2 disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
