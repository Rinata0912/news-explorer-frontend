import './LoginPopup.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { OpenRegisterPopupContext } from '../../contexts/OpenRegisterPopupContext';
import { CloseAllPopupsContext } from '../../contexts/CloseAllPopupsContext';
import { useContext } from 'react';

export function LoginPopup({ onClose, isOpen }) {
  const OpenRegisterPopup = useContext(OpenRegisterPopupContext);
  const CloseAllPopups = useContext(CloseAllPopupsContext);

  const handleSignUp = (evt) => {
    evt.preventDefault();

    CloseAllPopups();
    OpenRegisterPopup();
  };

  return (
    <PopupWithForm
      title="Вход"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form className="loginPopup__form" noValidate>
          <fieldset className="loginPopup__inputList">
            <label className="loginPopup__label">
            Email<input className="loginPopup__input" type="email" placeholder="Введите почту" minLength="2" maxLength="30" required></input>
            </label>
            <label className="loginPopup__label">
            Пароль<input className="loginPopup__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="30" required></input>
            </label>
          </fieldset>
          <button className="loginPopup__button">Войти</button>
          <div className="loginPopup__or">или <button onClick={handleSignUp} className="loginPopup__or-button">Зарегистрироваться</button></div>
      </form>
      
    </PopupWithForm>
  );
}