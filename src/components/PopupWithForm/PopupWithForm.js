import './PopupWithForm.css';
import { ReactComponent as Close } from '../../images/close.svg';

export function PopupWithForm({ title, button, children }) {
  return (
    <div className="popupWithForm">
      <div className="popupWithForm__container">
        <button className="popupWithForm__close"><Close className="popupWithForm__close-icon"/></button>
        <h3 className="popupWithForm__title">dfhgdfg</h3>
        <form className="popupWithForm__form">
          {children}
          <button className="popupWithForm__button">Войти</button>
          <div className="popupWithForm__or">или <a href="/" className="popupWithForm__link">Зарегистрироваться</a></div>
        </form>
      </div>
    </div>
  );
}