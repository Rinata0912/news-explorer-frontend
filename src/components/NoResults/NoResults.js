import './NoResults.css';
import { ReactComponent as NotFound } from '../../images/not-found.svg';

export function NoResults({ error, empty }) {
  return (
    <div className="noResults">
      <div className="noResults__container">
        {
          empty && <NotFound className="noResults__image"/>
        }
        {
          empty && <h2 className="noResults__title">Ничего не найдено</h2>
        }
        <p className="noResults__subtitle">
        {
          empty && 'К сожалению по вашему запросу ничего не найдено.'
        }
        {
          error && 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        }
        </p>
      </div>
    </div>
  );
}