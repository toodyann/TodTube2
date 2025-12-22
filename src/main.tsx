import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Snowfall from "react-snowfall";

import "./styles/index.scss";
import videos from "./scripts/data.jsx";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Snowfall color="#82C3d3" />
      <Header query={query} setQuery={setQuery} />
      <MainSection query={query} videos={videos} />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
