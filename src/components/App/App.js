import './App.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";

function App() {
  return (
    <div className="App">
      <PopupWithForm/>
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
