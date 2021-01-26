import './Login.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext, useState } from 'react';

export function Login({ onClose, isOpen, onLogin }) {
  const { handleOpenRegisterPopup, handleCloseAllPopups } = useContext(PopupContext);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenRegisterPopup();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(formValues);
    handleCloseAllPopups();
  };

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <PopupWithForm
      title="Вход"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit} className="login__form" noValidate>
          <fieldset className="login__inputList">
            <label className="login__label">
            Email<input onChange={handleChange} name="email" className="login__input" type="email" placeholder="Введите почту" minLength="2" maxLength="30" required></input>
            </label>
            <label className="login__label">
            Пароль<input onChange={handleChange} name="password" className="login__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="30" required></input>
            </label>
          </fieldset>
          <button className="login__button">Войти</button>
          <div className="login__or">или <button onClick={handleSignUp} className="login__or-button">Зарегистрироваться</button></div>
      </form>
      
    </PopupWithForm>
  );
}