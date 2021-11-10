import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
  return (
    <Link
      to='/'
      className={`h-32 flex justify-center items-center text-2xl text-white font-bold bg-topic-${topic.value} bg-no-repeat rounded-3xl`}
    >
      {topic.label}
    </Link>
  );
};

export default TopicCard;
