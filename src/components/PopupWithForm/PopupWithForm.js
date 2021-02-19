import './PopupWithForm.css';
import { ReactComponent as Close } from '../../images/close.svg';
import { useClosePopup } from '../../utils/useClosePopup';

export function PopupWithForm({ title, children, onClose, isOpen }) {

  const handleOnClose = useClosePopup({ onClose, isOpen });

  return (
    <div className="popupWithForm" onClick={handleOnClose}>
      <div className="popupWithForm__container">
        <button className="popupWithForm__close"><Close onClick={handleOnClose} className="popupWithForm__close-icon"/></button>
        <h3 className="popupWithForm__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}