import { Link } from 'react-router-dom';
import ArrowRight from 'assets/icons/arrow-right16_R.svg';

const Section = ({ children, title, readmore, column = 2 }) => {
  return (
    <section className='py-5 w-full'>
      <div className='flex justify-between items-center px-4 pb-3'>
        <h2 className='heading-section'>{title}</h2>
        {readmore && (
          <Link to='/' className='heading-readmore'>
            <div className='flex items-center'>
              {readmore}
              <img className='mt-0.5 ml-1.5' src={ArrowRight} alt={readmore} />
            </div>
          </Link>
        )}
      </div>
      <div className={`grid grid-cols-${column} gap-x-7 gap-y-3`}>{children}</div>
    </section>
  );
};

export default Section;
