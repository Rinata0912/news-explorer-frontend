import './Button.css';

export function Button({ theme, value, onClick }) {
  return (
    <button onClick={onClick} className={`button button_theme_${theme}`}>
      {value}
    </button>
  );
}