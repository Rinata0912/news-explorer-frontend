import './RegisterPopup.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { OpenLoginPopupContext } from '../../contexts/OpenLoginPopupContext';
import { CloseAllPopupsContext } from '../../contexts/CloseAllPopupsContext';
import { useContext } from 'react';

export function RegisterPopup({ onClose, isOpen }) {
  const OpenLoginPopup = useContext(OpenLoginPopupContext);
  const CloseAllPopups = useContext(CloseAllPopupsContext);

  const handleSignIn = (evt) => {
    evt.preventDefault();

    CloseAllPopups();
    OpenLoginPopup();
  };

  return (
    <PopupWithForm
      title="Регистрация"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form className="register__form" noValidate>
          <fieldset className="register__inputList">
            <label className="register__label">
            Email<input className="register__input" type="email" placeholder="Введите почту" minLength="2" maxLength="30" required></input>
            </label>
            <label className="register__label">
            Пароль<input className="register__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="30" required></input>
            </label>
            <label className="register__label">
            Имя<input className="register__input" type="text" placeholder="Введите своё имя" minLength="2" maxLength="30" required></input>
            </label>
          </fieldset>
          <button className="register__button">Зарегистрироваться</button>
          <div className="register__or">или <button onClick={handleSignIn} className="register__or-button">Войти</button></div>
      </form>
    </PopupWithForm>
  );
}