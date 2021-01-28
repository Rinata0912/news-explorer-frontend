import './Results.css';
import { useState } from 'react';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import { Button } from '../Button/Button';


export function Results({ articles }) {
  const [countArticles, setCountArticles] = useState(3);

  const handleShowMore = (evt) => {
    evt.preventDefault();

    setCountArticles((prevState) => prevState + 3);
  };

  return (
    <div className="results">
      <div className="results__container">
        <h2 className="results__title">Результаты поиска</h2>
        <div className="results__news">
          <NewsCardList cardList={articles.slice(0, countArticles)} />
        </div>
        {
          countArticles < articles.length && <Button onClick={handleShowMore} theme="normal">Показать еще</Button>
        }
      </div>
    </div>
  );
}