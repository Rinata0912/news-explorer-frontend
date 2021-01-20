import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';
import { Navigation } from '../Navigation/Navigation';
import { HEADER_NAVIGATION_AUTHORIZED } from '../../utils/constants';
import { useContext, useState } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import { ReactComponent as Menu } from '../../images/menu.svg';
import { ReactComponent as Close } from '../../images/close.svg';
import { Button } from '../Button/Button';

const IS_MOBILE = window.innerWidth < 768;

export function Header({ isLogin, theme }) {
  const { handleOpenLoginPopup, isLoginPopupOpen, isRegisterPopupOpen } = useContext(PopupContext);
  const [isCollapsed, setIsCollapsed] = useState(IS_MOBILE);

  const clickButton = (evt) => {
    evt.preventDefault();

    const buttonType = isLogin ? 'logout' : 'login';

    handleOnCollapseClick();
    
    if(buttonType === 'login') {
      handleOpenLoginPopup();
    }

    if(buttonType === 'logout') {
      console.log('logout');
    }
  };

  const handleOnCollapseClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`header-wrapper ${!isCollapsed ? 'header-wrapper_collapsed' : ''}`}>
      <div className={`header header_theme_${theme} ${!isCollapsed ? `header_collapsed header_collapsed_theme_${theme}` : ''}`}>
        <div className="header__container">
          <a href="/" className={`header__title header__title_theme_${theme}`}>NewsExplorer</a>
          <div className="header__content">
            {!(isLoginPopupOpen || isRegisterPopupOpen) && <button className="header__toggle-content" onClick={handleOnCollapseClick}>
              {isCollapsed ? <Menu className={`header__toggle-content-icon header__toggle-content-icon_theme_${theme}`}/> : <Close className={`header__toggle-content-icon header__toggle-content-icon_theme_${theme}`} />}
              </button>
            }
            <div className={`header__navigation ${!isCollapsed ? 'header__navigation_visible' : ''} header__navigation_theme_${theme}`}>
              <Navigation items={HEADER_NAVIGATION_AUTHORIZED} theme={theme} highlightActiveLink />
              {/* <button onClick={clickButton} className={`header__button header__button_theme_${theme}`}>{isLogin ? <Logout/> : 'Авторизоваться'}</button> */}
              <Button onClick={clickButton} theme={theme} value={isLogin ? <Logout/> : 'Авторизоваться'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}