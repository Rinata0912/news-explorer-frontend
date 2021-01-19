import './Footer.css';
import { Navigation } from '../Navigation/Navigation';
import { FOOTER_NAVIGATION } from '../../utils/constants';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">© 2020 Supersite, Powered by News API</div>
        <div className="footer__content">
          <Navigation items={FOOTER_NAVIGATION} theme="dark" />
        </div>
      </div>
    </div>
  );
}