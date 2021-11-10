import { Link } from 'react-router-dom';
import SpotIcon from 'assets/icons/spot16.svg';

const BaseCard = ({ item }) => {
  return (
    <div className='flex flex-col'>
      <Link to='/' className='mb-3'>
        <img
          className='h-48 rounded-xl bg-primary-light '
          src={item.Picture.PictureUrl1}
          alt={item.Picture.PictureDescription1}
        />
      </Link>
      <div className='w-full'>
        <Link to='/'>
          <h3 className='heading-card truncate w-full'>{item.Name}...</h3>
        </Link>
        <div className='flex'>
          <img src={SpotIcon} alt={Location} />
          <span className='ml-1 font-normal text-gray-700'>{item.Location}</span>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
