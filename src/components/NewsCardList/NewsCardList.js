import './NewsCardList.css';
import { NewsCard } from '../NewsCard/NewsCard';

export function NewsCardList({ cardList, onSaveArticle, onDeleteArticle }) {
  return (
    <div className="newsCardList">
      {
        cardList.map((card) => {
          return <NewsCard key={card.id} image={card.urlToImage || card.image} date={card.publishedAt || card.date} title={card.title} description={card.description || card.text} source={card.source.name || card.source} keyword={card.keyword} link={card.url} id={card.id} articleId={card.savedArticleId} saved={card.saved} onSaveArticle={onSaveArticle} onDeleteArticle={onDeleteArticle} />
        })
      }
    </div>
  );
}