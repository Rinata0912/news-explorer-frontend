import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

export function SavedNewsHeader() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="savedNewsHeader">
      <div className="savedNewsHeader__container">
        <div className="savedNewsHeader__name">Сохранённые статьи</div>
        <h1 className="savedNewsHeader__title">{

          `${currentUser.name}, у вас 5 сохранённых статей`
        }</h1>
        <div className="savedNewsHeader__keywords">По ключевым словам: Природа, Тайга и 2-м другим</div>
      </div>
    </div>
  );
}