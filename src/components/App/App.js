import './App.css';
import { Main } from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import { SavedNews } from '../SavedNews/SavedNews';
import { Footer } from '../Footer/Footer';
import { useState, useCallback } from 'react';
import { OpenLoginPopupContext } from '../../contexts/OpenLoginPopupContext';
import { OpenRegisterPopupContext } from '../../contexts/OpenRegisterPopupContext';
import { CloseAllPopupsContext } from '../../contexts/CloseAllPopupsContext';
import { LoginPopup } from '../LoginPopup/LoginPopup';
import { RegisterPopup } from '../RegisterPopup/RegisterPopup';

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

  return (
    <OpenLoginPopupContext.Provider value={handleOpenLoginPopup}>
      <OpenRegisterPopupContext.Provider value={handleOpenRegisterPopup}>
        <CloseAllPopupsContext.Provider value={handleCloseAllPopups}>
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
              isLoginPopupOpen && <LoginPopup onClose={handleCloseAllPopups} isOpen={isLoginPopupOpen} />
            }

            {
              isRegisterPopupOpen && <RegisterPopup onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} />
            }
          </div>
        </CloseAllPopupsContext.Provider>       
      </OpenRegisterPopupContext.Provider>
    </OpenLoginPopupContext.Provider>
  );
}

export default App;
