import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import { Header } from '../Header/Header';

export function SavedNews({ isLogin, savedArticles, onDeleteArticle }) {
  const keywordList = Array.from(new Set(savedArticles.map((article) => {
    return article.keyword;
  })));

  return (
    <div className="savedNews">
      <Header theme="dark" isLogin={isLogin} />
      <SavedNewsHeader keywords={keywordList} articleCount={savedArticles.length} />
      <div className="savedNews__cardlist">
        <NewsCardList inSavedNews cardList={savedArticles} onDeleteArticle={onDeleteArticle} />
      </div>
    </div>
  );
}