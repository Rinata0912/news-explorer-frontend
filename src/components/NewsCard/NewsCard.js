import './NewsCard.css';
import { ReactComponent as Save } from '../../images/bookmark.svg';

export function NewsCard({ image, date, title, description, source, keyword }) {
  return (
    <div className="newsCard">
      <div className="newsCard__keyword">{keyword}</div>
      <button className="newsCard__save"><Save className="newsCard__save-icon" /></button>
      <img className="newsCard__image" src={image} alt="картинка"/>
      <div className="newsCard__content">
        <div className="newsCard__date">{date}</div>
        <h3 className="newsCard__title">{title}</h3>
        <p className="newsCard__description">{description}</p>
        <div className="newsCard__source">{source}</div>
      </div>
    </div>
  );
}