import './Login.css';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';
import { useContext } from 'react';
import { useFormValidation } from '../../utils/useFormValidation';
import { Button } from '../Button/Button';

export function Login({ onClose, isOpen, onLogin }) {
  const { handleOpenRegisterPopup, handleCloseAllPopups } = useContext(PopupContext);
  const { formValues, errors, handleChange, isValid } = useFormValidation({
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

  return (
    <PopupWithForm
      title="Вход"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit} className="login__form" noValidate>
          <fieldset className="login__inputList">
            <label className="login__label">
              Email<input onChange={handleChange} name="email" className="login__input" type="email" placeholder="Введите почту" required />
              <span className="login__error">{errors.email}</span>
            </label>
            <label className="login__label">
              Пароль<input onChange={handleChange} name="password" className="login__input" type="password" placeholder="Введите пароль" required />
              <span className="login__error">{errors.password}</span>
            </label>
          </fieldset>
          <Button fluid theme='form' isDisabled={!isValid}>Войти</Button>
          <div className="login__or">или <button onClick={handleSignUp} className="login__or-button">Зарегистрироваться</button></div>
      </form>
      
    </PopupWithForm>
  );
}