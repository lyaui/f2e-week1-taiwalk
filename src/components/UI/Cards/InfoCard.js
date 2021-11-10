import { Link } from 'react-router-dom';
import { timeFormatter } from 'helpers/timeFormatter.js';
import SpotIcon from 'assets/icons/spot16.svg';
import ArrowRight from 'assets/icons/arrow-right16_G.svg';

const InfoCard = ({ activity }) => {
  return (
    <div className='h-40 rounded-xl flex overflow-hidden bg-gray-100 border border-gray-300'>
      <img
        className='h-full w-40 bg-primary-light object-cover'
        src={activity.Picture.PictureUrl1}
        alt={activity.Picture.PictureDescription1}
      />
      <div className='flex flex-col justify-between px-7 py-4'>
        <div>
          {/* dates */}
          <div className='flex text-gray-700 text-base mb-1'>
            <time datetime={activity.StartTime}>{timeFormatter(activity.StartTime)}</time>
            <span className='px-0.5'>-</span>
            <time datetime={activity.StartTime}>{timeFormatter(activity.EndTime)}</time>
          </div>
          {/* name */}
          <Link to='/' className='heading-card'>
            <h3>{activity.Name}</h3>
          </Link>
        </div>

        {/* location */}
        <div className='flex'>
          <img src={SpotIcon} alt={Location} />
          <span className='ml-1 font-normal text-gray-700'>{activity.Location}</span>
          <Link to='/' className='heading-readmore text-primary-light ml-auto'>
            <div className='flex items-center'>
              詳細介紹
              <img className='mt-0.5 ml-1.5' src={ArrowRight} alt='詳細介紹' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
