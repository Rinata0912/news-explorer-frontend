import './Navigation.css';

export function Navigation({ items, color }) {
  return (
    <ul className="navigation">
      {
        items.map((item) => {
          return <li className="navigation__item"><a href="/" style={{color: `${color ? color : '#fff'}`}} className="navigation__link">{item}</a></li>
        })
      }
    </ul>
  );
}