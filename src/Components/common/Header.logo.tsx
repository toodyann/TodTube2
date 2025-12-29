import TodTubeLogo from "../../assets/TodTube-logo.png";
import { createRoot } from "react-dom/client";
import { NavLink } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
function Logo() {
  return <img className="Logo" src={TodTubeLogo} alt="TodTube-logo" />;
}
export default function HeaderLogo() {
  return (
    <NavLink to="/">
      <Logo />
    </NavLink>
  );
}
