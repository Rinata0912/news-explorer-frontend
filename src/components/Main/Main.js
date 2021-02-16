import { Search } from '../Search/Search';
import { About } from '../About/About';
import { Header } from '../Header/Header';
import './Main.css';
import { Results } from '../Results/Results';
import { newsApi } from '../../utils/newsApi';
import { Preloader } from '../Preloader/Preloader';
import { useState } from 'react';
import { NoResults } from '../NoResults/NoResults';

export function Main({ onLogout, isLogin, setArticles, articles, onSaveArticle, onDeleteArticle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (keyword) => {
    setNoResults(false);
    setIsLoading(true);
    newsApi.searchArticles(keyword)
      .then((data) => {
        const articles = data.articles.map((article) => {
          return {
            ...article,
            id: article.title + article.publishedAt,
            keyword,
          };
        });
        setNoResults(articles.length === 0);
        setArticles(articles);
        try {
          localStorage.setItem('articles', JSON.stringify(articles));
        } catch(err) {}
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="main__banner">
        <Header theme="light" isLogin={isLogin} onLogout={onLogout} />
        <Search setArticles={setArticles} onSearch={handleSearch} />
      </div>
      <div className="main__results">
        {
          isLoading && <div className="main__preloader"><Preloader /></div>
        }
        {
          articles && !!articles.length && !isLoading && <Results articles={articles} onSaveArticle={onSaveArticle} onDeleteArticle={onDeleteArticle} />
        }
        {
          noResults && <NoResults empty />
        }
        {
          error && <NoResults error />
        }
        {}
      </div>
      
      <About />
    </>
  );
}