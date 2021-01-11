import { Search } from '../Search/Search';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { NewsCardList } from '../NewsCardList/NewsCardList';
import { cardList } from '../../utils/cardList';

export function Main() {
  return (
    <>
      <Search/>
      <NewsCardList cardList={cardList}/>
      <AboutAuthor/>
    </>
  );
}