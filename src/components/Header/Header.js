import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';
import { Navigation } from '../Navigation/Navigation';
import { HEADER_NAVIGATION_AUTHORIZED } from '../../utils/constants';
import { useContext } from 'react';
import { OpenLoginPopupContext } from '../../contexts/OpenLoginPopupContext';

export function Header({ isLogin, theme }) {
  const OpenLoginPopup = useContext(OpenLoginPopupContext);

  const clickButton = (evt) => {
    evt.preventDefault();

    const buttonType = isLogin ? 'logout' : 'login';
    
    if(buttonType === 'login') {
      OpenLoginPopup();
    }

    if(buttonType === 'logout') {
      console.log('logput');
    }
  };

  return (
    <div className={`header header_theme_${theme}`}>
      <div className="header__container">
        <a href="/" className={`header__title header__title_theme_${theme}`}>NewsExplorer</a>
        <div className="header__content">
          <Navigation items={HEADER_NAVIGATION_AUTHORIZED} theme={theme} highlightActiveLink />
          <button onClick={clickButton} className={`header__button header__button_theme_${theme}`}>{isLogin ? <Logout/> : 'Авторизоваться'}</button>
        </div>
      </div>
    </div>
  );
}