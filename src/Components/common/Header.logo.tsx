import TodTubeLogo from "../../assets/TodTube-logo.png";
import { NavLink } from "react-router-dom";
export default function HeaderLogo() {
  return (
    <NavLink to="/">
      <img className="Logo" src={TodTubeLogo} alt="TodTube-logo" />
    </NavLink>
  );
}
