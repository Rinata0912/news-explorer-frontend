import { Main } from '../Main/Main';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SavedNews } from '../SavedNews/SavedNews';
import { Footer } from '../Footer/Footer';
import { useState, useCallback, useEffect } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Success } from '../Success/Success';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/api';

let articlesFromStorage;
try { 
  articlesFromStorage = JSON.parse(localStorage.getItem('articles'));
} catch(err) {}


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [articles, setArticles] = useState(articlesFromStorage);
  const history = useHistory();

  console.log(articles);
  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTokenCheck = useCallback(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      api.checkToken(token)
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
  }, [handleTokenCheck]);

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

  const handleRegister = useCallback((userData) => {
    api
      .signUp(userData)
      .then(() => {
        history.push('/');
        setIsRegister(true);
        handleOpenSuccessPopup();
      })
      .catch((err) => {
        console.log(err);
        setIsRegister(false);
      });
  }, [handleOpenSuccessPopup, history]);

  const handleLogin = useCallback((userData) => {
    api
      .signIn(userData)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        api
          .checkToken(res.token)
          .then(() => {
            setIsLogin(true);
            history.push('/');
          })
          .catch((err) => err);
      })
      .catch((err) => {
        console.log(err);
        setIsRegister(false);
      });
  }, [history]);

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <PopupContext.Provider value={popupContext}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Main isLogin={isLogin} setArticles={setArticles} articles={articles} />
          </Route>

          <ProtectedRoute exact path="/saved-news" isLogin={isLogin}>
            <SavedNews isLogin={isLogin} />
          </ProtectedRoute>
          <Route >
            
          </Route>

        </Switch>

        <Footer />

        {
          isLoginPopupOpen && <Login onClose={handleCloseAllPopups} isOpen={isLoginPopupOpen} onLogin={handleLogin} />
        }

        {
          isRegisterPopupOpen && <Register onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} onRegister={handleRegister} />
        }

        {
          isSuccessPopupOpen && <Success onClose={handleCloseAllPopups} isOpen={isRegisterPopupOpen} />
        }
      </div>
    </PopupContext.Provider>
  </CurrentUserContext.Provider>
  );
}

export default App;
