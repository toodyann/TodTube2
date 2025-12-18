import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Header from "../Components/Header.jsx";
import Navigation from "../Components/NavMenu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Navigation />
  </StrictMode>
);
