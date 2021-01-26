import './Button.css';

export function Button({ theme, onClick, children }) {
  return (
    <button onClick={onClick} className={`button button_theme_${theme}`}>
      {children}
    </button>
  );
}