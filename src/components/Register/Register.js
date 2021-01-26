import './Register.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext, useState } from 'react';

export function Register({ onClose, isOpen, onRegister }) {
  const { handleOpenLoginPopup, handleCloseAllPopups } = useContext(PopupContext);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSignIn = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenLoginPopup();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(formValues);
  };

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <PopupWithForm
      title="Регистрация"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit} className="register__form" noValidate>
          <fieldset className="register__inputList">
            <label className="register__label">
            Email<input value={formValues.email} onChange={handleChange} name="email" className="register__input" type="email" placeholder="Введите почту" minLength="2" maxLength="30" required />
            </label>
            <label className="register__label">
            Пароль<input value={formValues.password} onChange={handleChange} name="password" className="register__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="30" required />
            </label>
            <label className="register__label">
            Имя<input value={formValues.name} onChange={handleChange} name="name" className="register__input" type="text" placeholder="Введите своё имя" minLength="2" maxLength="30" required />
            </label>
          </fieldset>
          <button className="register__button">Зарегистрироваться</button>
          <div className="register__or">или <button onClick={handleSignIn} className="register__or-button">Войти</button></div>
      </form>
    </PopupWithForm>
  );
}