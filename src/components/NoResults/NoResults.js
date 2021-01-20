import './NoResults.css';
import { ReactComponent as NotFound } from '../../images/not-found.svg';

export function NoResults() {
  return (
    <div className="noResults">
      <div className="noResults__container">
        <NotFound className="noResults__image"/>
        <h2 className="noResults__title">Ничего не найдено</h2>
        <p className="noResults__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    </div>
  );
}