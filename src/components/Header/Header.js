import './Header.css';
import { ReactComponent as Logout} from '../../images/logout.svg';

export function Header({ isLogin }) {
  return (
    <div className="header">
      <a href="/" className="header__title">NewsExplorer</a>
      <div className="header__content">
        <ul className="header__navigation">
          <li className="header__navigation-item">123123123</li>
          <li className="header__navigation-item">123123</li>
        </ul>
        <button className="header__button">{isLogin ? <Logout/> : 'Авторизоваться'}</button>
      </div>
    </div>
  );
}