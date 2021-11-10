import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ styles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    { original: 'https://picsum.photos/id/1018/1000/600/' },
    { original: 'https://picsum.photos/id/1015/1000/600/' },
    { original: 'https://picsum.photos/id/1019/1000/600/' },
  ];
  return (
    <Slider {...settings} className={`${styles} bg-primary-light h-96 overflow-hidden rounded-3xl`}>
      {images.map((image) => (
        <img src={image.original} className='bg-yellow h-96 object-cover' alt='' />
      ))}
    </Slider>
  );
};

export default Carousel;
