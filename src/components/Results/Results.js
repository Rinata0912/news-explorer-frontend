import './Results.css';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import { cardList } from '../../utils/cardList';

export function Results() {
  return (
    <div className="results">
      <div className="results__container">
        <h2 className="results__title">Результаты поиска</h2>
        <div className="results__news">
          <NewsCardList cardList={cardList} />
        </div>
      </div>
    </div>
  );
}