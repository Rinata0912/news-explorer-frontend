import './Register.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext } from 'react';

export function Register({ onClose, isOpen }) {
  const { handleOpenLoginPopup, handleCloseAllPopups, handleOpenSuccessPopup } = useContext(PopupContext);

  const handleSignIn = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenLoginPopup();
  };

  const handleRegister = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenSuccessPopup();
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
          <button className="register__button" onClick={handleRegister}>Зарегистрироваться</button>
          <div className="register__or">или <button onClick={handleSignIn} className="register__or-button">Войти</button></div>
      </form>
    </PopupWithForm>
  );
}