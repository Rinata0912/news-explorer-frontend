import './NewsCard.css';
import { ReactComponent as Save } from '../../images/bookmark.svg';
import { ReactComponent as Delete } from '../../images/trash.svg';
import { MONTHS } from '../../utils/constants';

export function NewsCard({ inSavedNews, image, date, title, description, source, keyword, link, id, articleId, saved, onSaveArticle, onDeleteArticle }) {

  const handleSaveArticle = (evt) => {
    evt.preventDefault();

    onSaveArticle({ image, date, title, text: description, source, keyword, link, id, articleId });
  };
  const newDate = new Date(date);

  const handleDeleteArticle = (evt) => {
    evt.preventDefault();

    onDeleteArticle(articleId);
  };

  return (
    <a href={link} target="_blank" rel="noreferrer" className="newsCard">
      {inSavedNews && <div className="newsCard__keyword">{keyword}</div>}
      <button onClick={saved ? handleDeleteArticle : handleSaveArticle} className={`newsCard__save ${saved ? 'newsCard__save_active' : ''}`}>
        {inSavedNews 
          ? <Delete className="newsCard__save-icon" />
          : <Save className="newsCard__save-icon" />
        }
      </button>
      <img className="newsCard__image" src={image} alt="картинка"/>
      <div className="newsCard__content">
        <div className="newsCard__date">
          {newDate.getDate()} {MONTHS[newDate.getMonth()]}, {newDate.getFullYear()}
        </div>
        <h3 className="newsCard__title">{title}</h3>
        <p className="newsCard__description">{description}</p>
        <div className="newsCard__source">{source}</div>
      </div>
    </a>
  );
}