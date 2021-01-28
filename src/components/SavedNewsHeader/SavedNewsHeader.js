import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const renderKeyword = (keyword) => {
  return <span className="savedNewsHeader__keyword">{keyword}</span>;
};

const renderKeywords = (keywords) => {
  if(keywords.length > 3) {
    return <>{renderKeyword(keywords[0])}, {renderKeyword(keywords[1])} и {renderKeyword(`${keywords.length - 2}  другим`)}</>;
  } else if(keywords.length === 3) {
    return <>{renderKeyword(keywords[0])}, {renderKeyword(keywords[1])} и {renderKeyword(keywords[2])}</>;
  } else if(keywords.length === 2){
    return <>{renderKeyword(keywords[0])} и {renderKeyword(keywords[1])}</>;
  } else {
    return <>{renderKeyword(keywords)}</>;
  }
};

export function SavedNewsHeader({ keywords, articleCount }) {
  const currentUser = useContext(CurrentUserContext);  

  return (
    <div className="savedNewsHeader">
      <div className="savedNewsHeader__container">
        <div className="savedNewsHeader__name">Сохранённые статьи</div>
        <h1 className="savedNewsHeader__title">{

          `${currentUser.name}, у вас ${articleCount} сохранённых статей`
        }</h1>
        <div className="savedNewsHeader__keywords">
          По ключевым словам: {renderKeywords(keywords)}
        </div>
      </div>
    </div>
  );
}