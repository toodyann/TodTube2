import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Header from "../Components/Header.jsx";
import MainSection from "../Components/MainSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>
);
