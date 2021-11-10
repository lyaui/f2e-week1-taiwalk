const Input = ({ className, placeholder }) => {
  return (
    <input
      className={`${className} h-14 px-7 py-2 mb-1.5 w-full placeholder-gray-500 text-primary-dark border bg-gray-100 border-gray-300 rounded-md`}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
