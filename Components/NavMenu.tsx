import "../src/styles/NavMenu.scss";
export default function Navigation() {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <a href="#">Головна</a>
        </li>
        <li>
          <a href="#">Відео</a>
        </li>
        <li>
          <a href="#">Плейлисти</a>
        </li>
        <li>
          <a href="#">Канали</a>
        </li>
        <li>
          <a href="#">Спільнота</a>
        </li>
        <li>
          <a href="#">Про мене</a>
        </li>
      </ul>
    </nav>
  );
}
