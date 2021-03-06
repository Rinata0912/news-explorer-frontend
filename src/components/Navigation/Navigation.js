import './Navigation.css';
import { NavLink } from 'react-router-dom';

export function Navigation({ items, highlightActiveLink, theme }) {
  return (
    <ul className="navigation">
      {
        items.map((item) => {
          return <li className="navigation__item" key={item.name}>
            {item.path 
            ? <NavLink 
              exact
              to={item.path}
              className={`navigation__link navigation__link_theme_${theme}`}
              activeClassName={highlightActiveLink ? `navigation__link_state_active-${theme}` : ''}>
                {item.name}
            </NavLink>
              : <a 
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`navigation__link navigation__link_theme_${theme}`}>
                {item.name}
            </a>
            }
          </li>
        })
      }
    </ul>
  );
}