import './Footer.css';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as Facebook } from '../../images/fb.svg';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">© 2020 Supersite, Powered by News API</div>
        <div className="footer__content">
          <ul className="footer__navigation">
            <li className="footer__item"><a href="/" className="footer__link">Главная</a></li>
            <li className="footer__item"><a href="/" className="footer__link">Яндекс.Практикум</a></li>
          </ul>
          <ul className="footer__social-list">
            <li className="footer__social-item"><a className="footer__social-link" href="/"><Github/></a></li>
            <li className="footer__social-item"><a className="footer__social-link" href="/"><Facebook/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}