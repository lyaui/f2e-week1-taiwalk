import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ROUTE } from 'constants/routes.js';
import { TOPICS } from 'constants/topics.js';
import { CATEGORIES } from 'constants/categories.js';
import { CITIES } from 'constants/cities.js';

import SearchIcon from 'assets/icons/search30.svg';
import Filter from 'components/UI/Filter.js';
import Input from 'components/UI/Input.js';
import Button from 'components/UI/Button.js';
import Section from 'components/Section.js';
import TopicCard from 'components/UI/Cards/TopicCard.js';

const Explore = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const isTypeExist = !!CATEGORIES.find((cate) => cate.value === type);

  // 若使用者探索的分類不存在，強制導至景點探索
  useEffect(() => {
    if (isTypeExist) return;
    navigate(ROUTE.BUILD_EXPLORE_PATH({ type: 'spots' }));
  }, [navigate, isTypeExist]);

  return (
    <div>
      {/* search */}
      <div className='grid grid-cols-4 gap-3 mb-10'>
        <Filter options={CITIES} />
        <Input
          placeholder={TOPICS[type]?.placeHolder || '你想去哪裡？請輸入關鍵字'}
          className='col-span-2'
        />
        <Button>
          <img src={SearchIcon} className='mr-2' alt='搜尋' />搜 尋
        </Button>
      </div>
      {/* topics */}
      <Section title={TOPICS[type]?.title || ''} column={4}>
        {TOPICS[type]?.cates?.map((item) => <TopicCard topic={item} />) || []}
      </Section>
    </div>
  );
};

export default Explore;
