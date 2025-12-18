import "../src/styles/Header.scss";
import TodTubeLogo from "../src/assets/TodTube-logo.PNG";
import searchIcon from "../src/assets/search-icon.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="Logo" src={TodTubeLogo} alt="TodTube-logo" />
      <div className="search-input-wrapper">
        <input className="input-search" placeholder="Пошук" type="text" />
        <button>
          <img className="search-icon" src={searchIcon} alt="search-icon" />
        </button>
      </div>
    </header>
  );
}
