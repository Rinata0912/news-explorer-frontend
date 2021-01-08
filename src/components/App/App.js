import './App.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";

function App() {
  return (
    <div className="App">
      <PopupWithForm/>
      <Header/>
      <Search/>
      <AboutAuthor/>
    </div>
  );
}

export default App;
