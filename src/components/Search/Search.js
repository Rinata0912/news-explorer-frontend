import './Search.css';

export function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form className="search__form">
          <input className="search__form-input"></input>
          <button className="search__form-button">Искать</button>
        </form>
      </div>
    </div>
  );
}