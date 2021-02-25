import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import { Header } from '../Header/Header';

export function SavedNews({ onLogout, isLogin, savedArticles, onDeleteArticle }) {
  const keywordList = Array.from(new Set(savedArticles.map((article) => {
    return article.keyword;
  })));

  return (
    <div className="savedNews">
      <Header theme="dark" isLogin={isLogin} onLogout={onLogout} />
      <SavedNewsHeader keywords={keywordList} articleCount={savedArticles.length} />
      <div className="savedNews__cardlist">
        <NewsCardList isLogin={isLogin} inSavedNews cardList={savedArticles} onDeleteArticle={onDeleteArticle} />
      </div>
    </div>
  );
}