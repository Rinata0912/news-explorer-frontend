import './NewsCardList.css';
import { NewsCard } from '../NewsCard/NewsCard';

export function NewsCardList({ cardList, onSaveArticle, onDeleteArticle, articleId }) {
  return (
    <div className="newsCardList">
      {
        cardList.map((card) => {
          return <NewsCard key={card.id} image={card.urlToImage} date={card.publishedAt} title={card.title} description={card.description} source={card.source.name} keyword={card.keyword} link={card.url} id={card.id} articleId={card.savedArticleId} saved={card.saved} onSaveArticle={onSaveArticle} onDeleteArticle={onDeleteArticle} />
        })
      }
    </div>
  );
}