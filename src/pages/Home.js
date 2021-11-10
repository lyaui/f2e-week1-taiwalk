import { useEffect } from 'react';
import { apiGetAllActivities } from 'apis';
import Header from 'components/Header';
import Section from 'components/Section.js';
import InfoCard from 'components/UI/Cards/InfoCard.js';
import BaseCard from 'components/UI/Cards/BaseCard.js';

const Home = () => {
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
    {
      ID: 'C2_315080000H_502004',
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

  // useEffect(() => {
  //   (async () => {
  //     const res = await apiGetAllActivities();
  //     console.log(res.data);
  //   })();
  // }, []);

  return (
    <div>
      <Header />
      <Section title='近期活動' readmore='查看更多活動' column={2}>
        {currentActivities.slice(0, 4).map((activity) => (
          <InfoCard key={activity.ID} activity={activity} />
        ))}
      </Section>
      <Section title='熱門打卡景點' readmore='查看更多景點' column={4}>
        {currentActivities.slice(0, 4).map((activity) => (
          <BaseCard key={activity.ID} item={activity} />
        ))}
      </Section>
      <Section title='一再回訪美食' readmore='查看更多美食' column={4}>
        {currentActivities.slice(0, 4).map((activity) => (
          <BaseCard key={activity.ID} item={activity} />
        ))}
      </Section>
    </div>
  );
};

export default Home;
