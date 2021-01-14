import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';
import { Navigation } from '../Navigation/Navigation';
import { HEADER_NAVIGATION_AUTHORIZED } from '../../utils/constants';

export function Header({ isLogin, theme }) {
  return (
    <div className={`header header_theme_${theme}`}>
      <div className="header__container">
        <a href="/" className={`header__title header__title_theme_${theme}`}>NewsExplorer</a>
        <div className="header__content">
          <Navigation items={HEADER_NAVIGATION_AUTHORIZED} theme={theme} highlightActiveLink />
          <button className={`header__button header__button_theme_${theme}`}>{isLogin ? <Logout/> : 'Авторизоваться'}</button>
        </div>
      </div>
    </div>
  );
}