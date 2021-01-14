import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import { cardList } from '../../utils/cardList';
import { Header } from '../Header/Header';
import { DARK_COLOR } from '../../utils/constants';

export function SavedNews() {
  return (
    <div className="savedNews">
      <Header color={DARK_COLOR}/>
      <SavedNewsHeader />
      <div className="savedNews__cardlist">
        <NewsCardList cardList={cardList} />
      </div>
    </div>
  );
}