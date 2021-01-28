import './NewsCard.css';
import { ReactComponent as Save } from '../../images/bookmark.svg';

export function NewsCard({ image, date, title, description, source, keyword, link, id, articleId, saved, onSaveArticle, onDeleteArticle }) {

  const handleSaveArticle = (evt) => {
    evt.preventDefault();

    onSaveArticle({ image, date, title, text: description, source, keyword, link, id, articleId });
  };

  const handleDeleteArticle = (evt) => {
    evt.preventDefault();

    onDeleteArticle(articleId);
  };

  return (
    <a href={link} target="_blank" rel="noreferrer" className="newsCard">
      <div className="newsCard__keyword">{keyword}</div>
      <button onClick={saved ? handleDeleteArticle : handleSaveArticle} className={`newsCard__save ${saved ? 'newsCard__save_active' : ''}`}><Save className="newsCard__save-icon" /></button>
      <img className="newsCard__image" src={image} alt="картинка"/>
      <div className="newsCard__content">
        <div className="newsCard__date">{date}</div>
        <h3 className="newsCard__title">{title}</h3>
        <p className="newsCard__description">{description}</p>
        <div className="newsCard__source">{source}</div>
      </div>
    </a>
  );
}