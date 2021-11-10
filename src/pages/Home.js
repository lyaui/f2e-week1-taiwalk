import { useEffect } from 'react';
import Header from 'components/Header';
import Section from 'components/Section.js';

const Home = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await apiGetAllRestaurants();
  //     console.log({ res });
  //   })();
  // }, []);

  return (
    <div>
      <Header />
      <Section title='近期活動' readmore='查看更多活動'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic ad sit rem maxime
        ullam nihil exercitationem unde? Et ipsam quasi aspernatur doloribus exercitationem
        necessitatibus voluptates mollitia maxime earum nesciunt?
      </Section>
      <Section title='熱門打卡景點' readmore='查看更多景點'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti impedit architecto at
        excepturi unde repellendus, voluptates, corporis, asperiores facere praesentium
        perspiciatis? Perferendis similique quod enim. Laboriosam saepe atque minus molestiae.
      </Section>
      <Section title='一再回訪美食' readmore='查看更多美食'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit corporis, ex
        debitis suscipit eaque voluptate? Minima placeat vitae voluptas atque beatae eos aliquid non
        officiis, illum, dolore corrupti. Aspernatur.
      </Section>
    </div>
  );
};

export default Home;
