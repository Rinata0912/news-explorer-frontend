import './Search.css';
import { SearchForm } from '../SearchForm/SearchForm';

export function Search({ onSearch }) {
  return (
    <div className="search">
      <div className="search__container">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm onSearch={onSearch} />
      </div>
    </div>
  );
}