import './App.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { Footer } from '../Footer/Footer';
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { cardList } from '../../utils/cardList';

function App() {
  return (
    <div className="App">
      <PopupWithForm/>
      <Header/>
      <Search/>
      <NewsCardList cardList={cardList}/>
      <AboutAuthor/>
      <Footer/>
    </div>
  );
}

export default App;
