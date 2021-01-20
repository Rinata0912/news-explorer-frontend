import './SavedNewsHeader.css';

export function SavedNewsHeader() {
  return (
    <div className="savedNewsHeader">
      <div className="savedNewsHeader__container">
        <div className="savedNewsHeader__name">Сохранённые статьи</div>
        <h1 className="savedNewsHeader__title">Грета, у вас 5 сохранённых статей</h1>
        <div className="savedNewsHeader__keywords">По ключевым словам: Природа, Тайга и 2-м другим</div>
      </div>
    </div>
  );
}