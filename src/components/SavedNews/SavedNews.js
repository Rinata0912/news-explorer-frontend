import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import { Header } from '../Header/Header';

export function SavedNews({ isLogin, savedArticles, onSaveArticle, onDeleteArticle }) {
  const keywordList = Array.from(new Set(savedArticles.map((article) => {
    return article.keyword;
  })));
  console.log('keywordList =',keywordList);

  return (
    <div className="savedNews">
      <Header theme="dark" isLogin={isLogin} />
      <SavedNewsHeader keywords={keywordList} articleCount={savedArticles.length} />
      <div className="savedNews__cardlist">
        <NewsCardList cardList={savedArticles} onSaveArticle={onSaveArticle} onDeleteArticle={onDeleteArticle} />
      </div>
    </div>
  );
}