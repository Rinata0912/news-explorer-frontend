import { Main } from '../Main/Main';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SavedNews } from '../SavedNews/SavedNews';
import { Footer } from '../Footer/Footer';
import { useState, useCallback, useEffect } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Success } from '../Success/Success';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/api';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const history = useHistory();

  const handleTokenCheck = useCallback(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      api
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLogin(true);
            history.push('/');
          }
        })
        .catch((err) => err);
    }
  }, [history]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleOpenLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(true);
  }, []);

  const handleOpenRegisterPopup = useCallback(() => {
    setIsRegisterPopupOpen(true);
  }, []);

  const handleOpenSuccessPopup = useCallback(() => {
    setIsSuccessPopupOpen(true);
  }, []);

  const handleCloseAllPopups = useCallback(() => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }, []);

  const popupContext = {
    handleOpenLoginPopup,
    handleOpenRegisterPopup,
    handleOpenSuccessPopup,
    handleCloseAllPopups,
    isLoginPopupOpen,
    isRegisterPopupOpen,
  };

  return (
    <PopupContext.Provider value={popupContext}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Main isLogin={isLogin} />
          </Route>

          <ProtectedRoute exact path="/saved-news" isLogin={isLogin}>
            <SavedNews isLogin={isLogin} />
          </ProtectedRoute>
          <Route >
            
          </Route>

        </Switch>

        <Footer />

        {
          isLoginPopupOpen && <Login onClose={handleCloseAllPopups} isOpen={isLoginPopupOpen} />
        }

        {
          isRegisterPopupOpen && <Register onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} />
        }

        {
          isSuccessPopupOpen && <Success onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} />
        }
      </div>
    </PopupContext.Provider>
  );
}

export default App;
