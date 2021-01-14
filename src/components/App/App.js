import './App.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Main } from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import { SavedNews } from '../SavedNews/SavedNews';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <PopupWithForm/>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
