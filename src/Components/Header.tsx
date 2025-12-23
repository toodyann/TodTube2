import "../styles/Header.scss";
import TodTubeLogo from "../assets/TodTube-logo.png";
import searchIcon from "../assets/search-icon.svg";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function Header({ query, setQuery }: Props) {
  return (
    <header className="header">
      <img className="Logo" src={TodTubeLogo} alt="TodTube-logo" />
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Пошук..."
          aria-label="Пошук відео"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" aria-label="Почати пошук">
          <img className="search-icon" src={searchIcon} alt="search-icon" />
        </button>
      </div>
    </header>
  );
}
