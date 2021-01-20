import './Success.css';
import { useContext } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { PopupContext } from '../../contexts/PopupContext';

export function Success({ onClose, isOpen }) {
  const { handleCloseAllPopups, handleOpenLoginPopup } = useContext(PopupContext);

  const handleSignIn = (evt) => {
    evt.preventDefault();

    handleCloseAllPopups();
    handleOpenLoginPopup();
  };

  return (
    <PopupWithForm
      title="Пользователь успешно зарегистрирован!"
      onClose={onClose}
      isOpen={isOpen}
    >
      <form className="success">
        <button onClick={handleSignIn} className="success__button">Войти</button>
      </form>
    </PopupWithForm>
  );
}