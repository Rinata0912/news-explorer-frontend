import { Main } from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import { SavedNews } from '../SavedNews/SavedNews';
import { Footer } from '../Footer/Footer';
import { useState, useCallback } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const handleOpenLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(true);
  }, []);

  const handleOpenRegisterPopup = useCallback(() => {
    setIsRegisterPopupOpen(true);
  }, []);

  const handleCloseAllPopups = useCallback(() => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  }, []);

  const popupContext = {
    handleOpenLoginPopup,
    handleOpenRegisterPopup,
    handleCloseAllPopups,
    isLoginPopupOpen,
    isRegisterPopupOpen,
  };

  return (
    <PopupContext.Provider value={popupContext}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/saved-news">
            <SavedNews />
          </Route>

        </Switch>

        <Footer />

        {
          isLoginPopupOpen && <Login onClose={handleCloseAllPopups} isOpen={isLoginPopupOpen} />
        }

        {
          isRegisterPopupOpen && <Register onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} />
        }
      </div>
    </PopupContext.Provider>
  );
}

export default App;
