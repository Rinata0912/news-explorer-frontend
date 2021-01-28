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
  const [savedArticles, setSavedArticles] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //   api.getUserInfo()
  //     .then((userInfo) => {
  //       setCurrentUser(userInfo.data);
  //       api.getSavedArticles()
  //         .then((articles) => {
  //           setSavedArticles(articles);
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleTokenCheck = useCallback(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      api.checkToken(token)
        .then((userInfo) => {
          if (userInfo) {
            setCurrentUser(userInfo.data);
            setIsLogin(true);
            history.push('/');
          }
        })
        .catch((err) => err);
    }
  }, [history]);

  useEffect(() => {
    if(isLogin) {
      api.getSavedArticles()
        .then((savedArticles) => setSavedArticles(savedArticles.data))
        .catch((err) => console.log(err));
    }
  }, [isLogin]);

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

  const handleSaveArticle = useCallback(({ 
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    id,
  }) => {
    api.saveArticle({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      id,
    })
      .then((article) => {
        console.log(article);
        setSavedArticles((prevState) => [
          article.data,
          ...prevState,
        ])
      })
      .catch((err) => console.log(err));
  }, []);

  const articlesWithSaved = articles.map((article) => {
    console.log(savedArticles);
    return {...article, saved: !!savedArticles.find((savedArticle) => savedArticle.id === article.id)};
  });

  console.log(savedArticles);

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <PopupContext.Provider value={popupContext}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Main isLogin={isLogin} setArticles={setArticles} articles={articlesWithSaved} onSaveArticle={handleSaveArticle} />
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
