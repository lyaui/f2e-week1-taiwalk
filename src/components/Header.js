import SpotIcon from 'assets/icons/spot24_Y.svg';
const Header = () => {
  return (
    <header class='flex justify-center'>
      <div className=''>
        <h1 className='text-5xl tracking-wide leading-relaxed font-light'>
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
    </header>
  );
};

export default Header;
