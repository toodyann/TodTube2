import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Snowfall from "react-snowfall";

import "./styles/index.scss";
import videos from "./scripts/data.jsx";
import { NotFound } from "./Components/NotFound";
import { Community } from "./Components/Community";
import { Playlists } from "./Components/Playlists";
import { Channels } from "./Components/Channels";
import Focus from "./Components/pages/VideoFocus";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Snowfall color="#738285ff" />
      <Header query={query} setQuery={setQuery} />
      <MainSection query={query} image={videos} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/focus/:id" element={<Focus />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
