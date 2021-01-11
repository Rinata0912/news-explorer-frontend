import './NewsCardList.css';
import { NewsCard } from '../NewsCard/NewsCard';

export function NewsCardList({ cardList }) {
  return (
    <div className="newsCardList">
      {
        cardList.map((card) => {
          return <NewsCard image={card.image} date={card.date} title={card.title} description={card.description} source={card.source} />
        })
      }
    </div>
  );
}