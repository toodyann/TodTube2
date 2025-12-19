import Navigation from "../Components/NavMenu.jsx";
import VideoCards from "../Components/Videos.jsx";

import "../src/styles/MainSection.scss";
import "../src/styles/VideosCards.scss";
export default function MainSection() {
  return (
    <>
      <div className="main-section-wrapper">
        <Navigation />
        <div className="video-wrapper">
          <VideoCards />
        </div>
      </div>
    </>
  );
}
