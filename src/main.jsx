import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../Components/Header.jsx";
import MainSection from "../Components/MainSection.jsx";

import "./styles/index.scss";
import "./js/data.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>
);
