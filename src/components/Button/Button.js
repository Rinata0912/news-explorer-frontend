import './Button.css';

export function Button({ theme, onClick, isDisabled, children, fluid }) {
  return (
    <button disabled={isDisabled} onClick={onClick} className={`button button_theme_${theme} ${isDisabled ? 'button_state_disabled' : ''} ${fluid ? 'button_type_fluid' : ''}`}>
      {children}
    </button>
  );
}