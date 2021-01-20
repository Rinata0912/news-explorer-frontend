import './LoginPopup.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext } from 'react';

export function LoginPopup({ onClose, isOpen }) {
  const { handleOpenRegisterPopup, handleCloseAllPopups } = useContext(PopupContext);

  const handleSignUp = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenRegisterPopup();
  };

  return (
    <PopupWithForm
      title="Вход"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form className="login__form" noValidate>
          <fieldset className="login__inputList">
            <label className="login__label">
            Email<input className="login__input" type="email" placeholder="Введите почту" minLength="2" maxLength="30" required></input>
            </label>
            <label className="login__label">
            Пароль<input className="login__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="30" required></input>
            </label>
          </fieldset>
          <button className="login__button">Войти</button>
          <div className="login__or">или <button onClick={handleSignUp} className="login__or-button">Зарегистрироваться</button></div>
      </form>
      
    </PopupWithForm>
  );
}