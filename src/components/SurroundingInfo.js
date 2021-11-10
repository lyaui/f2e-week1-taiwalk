import { Link } from 'react-router-dom';
const SurroundingInfo = ({ item }) => {
  return (
    <Link to='/' className='flex flex-col py-7 items-center border border-gray-300 rounded-md'>
      <img className='mb-1' src={item.icon} alt={item.label} />
      <p className='text-primary-light font-bold tracking-widest'>{item.label}</p>
    </Link>
  );
};

export default SurroundingInfo;
