const Button = ({ label, secondary, fullWidth, disabled, large, outline, onClick, Report }) => {
  return (
    <button 
        onClick={onClick}
        className={`
            ${fullWidth ? "w-full" : "w-auto"}
            ${large ? "py-3 px-5 text-xl" : "py-2 px-4 text-md"}
            ${secondary ? "bg-white text-black border-black" : "bg-sky-500 text-white border-sky-500"}
            ${outline ? "bg-transparent border-white text-white" : ""}
            ${Report ? "bg-red-500 text-white border-red-500" : ""}
            ${disabled ? "opacity-70 cursor-not-allowed" : ""}
            rounded-full font-semibold border-2 transition hover:opacity-80 
        `}
    >
        {label}
    </button>
  )
}

export default Button