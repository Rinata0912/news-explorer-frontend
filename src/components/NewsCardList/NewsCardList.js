import './NewsCardList.css';
import { NewsCard } from '../NewsCard/NewsCard';

export function NewsCardList({ cardList, onSaveArticle }) {
  return (
    <div className="newsCardList">
      {
        cardList.map((card) => {
          return <NewsCard key={card.id} image={card.urlToImage} date={card.publishedAt} title={card.title} description={card.description} source={card.source.name} keyword={card.keyword} link={card.url} id={card.id} saved={card.saved} onSaveArticle={onSaveArticle} />
        })
      }
    </div>
  );
}