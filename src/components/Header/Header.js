import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';
import { Navigation } from '../Navigation/Navigation';
import { HEADER_NAVIGATION } from '../../utils/constants';

export function Header({ isLogin, color }) {
  return (
    <div className="header" style={{ color: `${color ? color : '#fff'}`}}>
      <div className="header__container">
        <a href="/" className="header__title">NewsExplorer</a>
        <div className="header__content">
          <Navigation items={HEADER_NAVIGATION} color={color}/>
          <button className="header__button" style={{ borderColor: `${color ? color : '#fff'}`}}>{isLogin ? <Logout/> : 'Авторизоваться'}</button>
        </div>
      </div>
    </div>
  );
}