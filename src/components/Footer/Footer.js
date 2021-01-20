import './Footer.css';
import { Navigation } from '../Navigation/Navigation';
import { FOOTER_NAVIGATION } from '../../utils/constants';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as Facebook } from '../../images/fb.svg';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">© 2020 Supersite, Powered by News API</div>
        <div className="footer__content">
          <Navigation items={FOOTER_NAVIGATION} theme="dark" />
          <ul className="footer__social-list">
          <li className="footer__social-item"><a className="footer__social-link" href="/"><Github/></a></li>
          <li className="footer__social-item"><a className="footer__social-link" href="/"><Facebook/></a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}