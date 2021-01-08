import './AboutAuthor.css';
import avatar from '../../images/avatar.jpg';

export function AboutAuthor() {
  return (
    <div className="aboutAuthor">
      <div className="aboutAuthor__container">
        <img src={avatar} alt="аватар" className="aboutAuthor__avatar" />
        <div className="aboutAuthor__info">
          <h2 className="aboutAuthor__title">Об авторе</h2>
          <p className="aboutAuthor__text">
            Привет! Меня зовут Мурлыса и я занимаюсь фронтенд-разработкой.
            <br/><br/>
            Больше всего мне нравится писать функциональные реакт-компоненты, а в свободное время спать :)
            Я ненавижу бэк.
          </p>
        </div>
      </div>
    </div>
  );
}