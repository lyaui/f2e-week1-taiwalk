const Filter = ({ options }) => {
  return (
    <select className='h-14 px-7 py-2 mb-1.5 w-full font-medium text-primary-dark border border-gray-300 rounded-md'>
      {options.map((option) => (
        <option key={option.value} value={option.value} className='bg-white'>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Filter;
