import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";

import "./styles/index.scss";
import "./js/data.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>
);
