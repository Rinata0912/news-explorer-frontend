import './Register.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext } from 'react';
import { useFormValidation } from '../../utils/useFormValidation';
import { Button } from '../Button/Button';

export function Register({ onClose, isOpen, onRegister }) {
  const { handleOpenLoginPopup, handleCloseAllPopups } = useContext(PopupContext);
  const { formValues, errors, handleChange, isValid } = useFormValidation({
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

  return (
    <PopupWithForm
      title="Регистрация"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit} className="register__form" noValidate>
          <fieldset className="register__inputList">
            <label className="register__label">
              Email<input value={formValues.email} onChange={handleChange} name="email" className="register__input" type="email" placeholder="Введите почту" required />
              <span className="register__error">{errors.email}</span>
            </label>
            <label className="register__label">
              Пароль<input value={formValues.password} onChange={handleChange} name="password" className="register__input" type="password" placeholder="Введите пароль" required />
              <span className="register__error">{errors.password}</span>
            </label>
            <label className="register__label">
              Имя<input value={formValues.name} onChange={handleChange} name="name" className="register__input" type="text" placeholder="Введите своё имя" required />
              <span className="register__error">{errors.name}</span>
            </label>
          </fieldset>
          <Button fluid theme='form' isDisabled={!isValid}>Зарегистрироваться</Button>
          <div className="register__or">или <button onClick={handleSignIn} className="register__or-button">Войти</button></div>
      </form>
    </PopupWithForm>
  );
}