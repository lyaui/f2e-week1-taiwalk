const Badge = ({ children }) => {
  return (
    <span className='w-min m-1 py-0.5 px-4 border border-yellow-dark rounded-2xl text-yellow-dark font-normal'>
      #{children}
    </span>
  );
};

export default Badge;
