import SpotIcon from 'assets/icons/spot24_Y.svg';
import SearchIcon from 'assets/icons/search30.svg';
import { CATEGORIES } from 'constants/categories.js';
import Filter from 'components/UI/Filter.js';
import Input from 'components/UI/Input.js';
import Button from 'components/UI/Button.js';

const Header = () => {
  return (
    <header className='px-24 flex justify-between items-center'>
      {/* heading */}
      <div className='mr-22 w-3/5'>
        <h1 className='text-gray-900 text-5xl tracking-wide leading-relaxed font-light'>
          探索<span className='border-b-2 border-yellow'>台灣之美</span>
          <br />
          讓我們更親近這片土地
        </h1>
        <div className='flex items-center mt-4'>
          <img src={SpotIcon} alt='台灣旅遊景點導覽' />
          <p className='font-normal tracking-wider text-xl text-gray-700'>
            台灣旅遊景點導覽<span className='ml-2 font-playfair'>Taiwan Travel Guide</span>
          </p>
        </div>
      </div>
      {/* search */}
      <div className='w-2/5 mt-4'>
        <Filter options={CATEGORIES} />
        <Input placeholder='你想去哪裡？請輸入關鍵字' />
        <Button>
          <img src={SearchIcon} className='mr-2' alt='搜尋' />搜 尋
        </Button>
      </div>
    </header>
  );
};

export default Header;
