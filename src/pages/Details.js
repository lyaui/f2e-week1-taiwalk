import SpotIcon from 'assets/icons/surrounding-spot30.svg';
import ActivityIcon from 'assets/icons/surrounding-activity30.svg';
import FoodIcon from 'assets/icons/surrounding-food30.svg';

import Section from 'components/Section.js';
import Carousel from 'components/Carousel.js';
import Badge from 'components/UI/Badge.js';
import DetailCard from 'components/UI/Cards/DetailCard.js';
import Map from 'components/Map.js';
import SurroundingInfo from 'components/SurroundingInfo.js';
import BaseCard from 'components/UI/Cards/BaseCard.js';

const Details = () => {
  const surroundings = [
    { label: '附近景點', value: 'spot', icon: SpotIcon },
    { label: '附近活動', value: 'activity', icon: ActivityIcon },
    { label: '附近美食', value: 'food', icon: FoodIcon },
  ];
  const currentActivities = [
    {
      ID: 'C2_315080000H_502000',
      Name: '2021年全國巧聖先師文化祭會師在苑裡',
      StartTime: '2021-11-13T07:00:00+08:00',
      EndTime: '2021-11-14T21:00:00+08:00',
      Location: '苑裡巧聖先師廟',
      Picture: {
        PictureDescription1: '茶文化傳承',
        PictureDescription2: '圓潭白露節氣品茗體驗',
        PictureDescription3: '遊客體驗鄒族茶席文化',
        PictureUrl1: 'https://www.taiwan.net.tw/att/event/c3b15d87-b473-429f-a15e-cd5c10ca6dc1.jpg',
        PictureUrl2: 'https://www.taiwan.net.tw/att/event/e06b0a59-cf5d-43cb-8b95-578a5a42bbb3.jpg',
        PictureUrl3: 'https://www.taiwan.net.tw/att/event/3696dd30-f48e-4b38-9f64-3ec9f104992f.jpg',
      },
    },
    {
      ID: 'C2_315080000H_502001',
      Name: '2021年全國巧聖先師文化祭會師在苑裡',
      StartTime: '2021-11-13T07:00:00+08:00',
      EndTime: '2021-11-14T21:00:00+08:00',
      Location: '苑裡巧聖先師廟',
      Picture: {
        PictureDescription1: '茶文化傳承',
        PictureDescription2: '圓潭白露節氣品茗體驗',
        PictureDescription3: '遊客體驗鄒族茶席文化',
        PictureUrl1: 'https://www.taiwan.net.tw/att/event/c3b15d87-b473-429f-a15e-cd5c10ca6dc1.jpg',
        PictureUrl2: 'https://www.taiwan.net.tw/att/event/e06b0a59-cf5d-43cb-8b95-578a5a42bbb3.jpg',
        PictureUrl3: 'https://www.taiwan.net.tw/att/event/3696dd30-f48e-4b38-9f64-3ec9f104992f.jpg',
      },
    },
    {
      ID: 'C2_315080000H_502002',
      Name: '2021年全國巧聖先師文化祭會師在苑裡',
      StartTime: '2021-11-13T07:00:00+08:00',
      EndTime: '2021-11-14T21:00:00+08:00',
      Location: '苑裡巧聖先師廟',
      Picture: {
        PictureDescription1: '茶文化傳承',
        PictureDescription2: '圓潭白露節氣品茗體驗',
        PictureDescription3: '遊客體驗鄒族茶席文化',
        PictureUrl1: 'https://www.taiwan.net.tw/att/event/c3b15d87-b473-429f-a15e-cd5c10ca6dc1.jpg',
        PictureUrl2: 'https://www.taiwan.net.tw/att/event/e06b0a59-cf5d-43cb-8b95-578a5a42bbb3.jpg',
        PictureUrl3: 'https://www.taiwan.net.tw/att/event/3696dd30-f48e-4b38-9f64-3ec9f104992f.jpg',
      },
    },
    {
      ID: 'C2_315080000H_502003',
      Name: '2021年全國巧聖先師文化祭會師在苑裡',
      StartTime: '2021-11-13T07:00:00+08:00',
      EndTime: '2021-11-14T21:00:00+08:00',
      Location: '苑裡巧聖先師廟',
      Picture: {
        PictureDescription1: '茶文化傳承',
        PictureDescription2: '圓潭白露節氣品茗體驗',
        PictureDescription3: '遊客體驗鄒族茶席文化',
        PictureUrl1: 'https://www.taiwan.net.tw/att/event/c3b15d87-b473-429f-a15e-cd5c10ca6dc1.jpg',
        PictureUrl2: 'https://www.taiwan.net.tw/att/event/e06b0a59-cf5d-43cb-8b95-578a5a42bbb3.jpg',
        PictureUrl3: 'https://www.taiwan.net.tw/att/event/3696dd30-f48e-4b38-9f64-3ec9f104992f.jpg',
      },
    },
  ];
  return (
    <div>
      <Carousel className='mb-4' />

      <Section title='羅東林業文化園區' column={1}>
        <div className='flex px-3 mb-3'>
          <Badge>123456789</Badge>
        </div>
        <div className='px-4 heading-content'>景點介紹：</div>
        <p className='px-4 leading-8 mb-12'>
          日治時期台灣有三大林場，分別是：八仙山林場、阿里山林場以及太平山林場。從太平山林場所砍伐的檜木、扁柏等木材，都會運送到羅東出張所和貯木池進行存放，而羅東出張所經過規劃後，成為現今的羅東林業文化園區。羅東林業文化區坐落於羅東市區附近，交通十分方便，園內規劃有貯木池、森林鐵路、竹林車站、蒸汽火車頭、綠林和步道等，從這些設備、建築物中發現當年的林業發展多麼蓬勃，又是多麼地熱鬧，同時也讓人不禁感慨，許多珍貴的檜木消逝在太平山中。隨著林業發展的轉型，可以看見昔日風華的貯木池，零散放著當時砍伐的檜木，如今，貯木池不再具有貯木的功能，而是成為水鳥和魚兒們的天堂。在園區中散步，彷彿進入一座秘密花園，園內種植滿滿茂密的樹木，不時聽見鳥兒的叫聲，空氣中帶有芬多精與淡淡的檜木香，舒服的環境，令人不禁停下腳步，感受內心的寧靜。
        </p>
        <div className='grid grid-cols-2 gap-7'>
          <DetailCard />
          <div>
            <Map />
            <div className='heading-content mb-5'>周邊資訊：</div>
            <div className='grid grid-cols-3 gap-7'>
              {surroundings.map((item) => (
                <SurroundingInfo item={item} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section title='還有這些不能錯過的景點' readmore='更多景點' column={4}>
        {currentActivities.slice(0, 4).map((activity) => (
          <BaseCard key={activity.ID} item={activity} />
        ))}
      </Section>
    </div>
  );
};

export default Details;
