import './SearchForm.css';

export function SearchForm() {
  return (
    <form className="searchForm">
      <input className="searchForm__input"></input>
      <button className="searchForm__button">Искать</button>
    </form>
  );
}