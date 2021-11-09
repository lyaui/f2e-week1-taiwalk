const Button = ({ children }) => {
  return (
    <button className='bg-primary-light text-white flex items-center justify-center tracking-widest h-14 w-full rounded-md'>
      {children}
    </button>
  );
};

export default Button;
