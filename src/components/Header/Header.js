import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';
import { Navigation } from '../Navigation/Navigation';
import { HEADER_NAVIGATION } from '../../utils/constants';

export function Header({ isLogin }) {
  return (
    <div className="header">
      <div className="header__container">
        <a href="/" className="header__title">NewsExplorer</a>
        <div className="header__content">
          <Navigation items={HEADER_NAVIGATION}/>
          <button className="header__button">{isLogin ? <Logout/> : 'Авторизоваться'}</button>
        </div>
      </div>
    </div>
  );
}