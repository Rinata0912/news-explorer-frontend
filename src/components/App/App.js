import './App.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <PopupWithForm/>
      <Header/>
      <Search/>
      <AboutAuthor/>
      <Footer/>
    </div>
  );
}

export default App;
