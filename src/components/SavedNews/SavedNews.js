import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import { cardList } from '../../utils/cardList';
import { Header } from '../Header/Header';

export function SavedNews() {
  return (
    <div className="savedNews">
      <Header theme="dark"/>
      <SavedNewsHeader />
      <div className="savedNews__cardlist">
        <NewsCardList cardList={cardList} />
      </div>
    </div>
  );
}