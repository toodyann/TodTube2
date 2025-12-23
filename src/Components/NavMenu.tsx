import { NavLink } from "react-router-dom";
import "../styles/NavMenu.scss";
export default function Navigation() {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <a href="#">Головна</a>
        </li>
        <li></li>
        <li>
          <NavLink to="/playlists">Плейлісти</NavLink>
        </li>
        <li>
          <NavLink to="/channels">Канали</NavLink>
        </li>
        <li>
          <NavLink to="/community">Спільнота</NavLink>
        </li>
        <li>
          <a href="#">Про мене</a>
        </li>
      </ul>
    </nav>
  );
}
