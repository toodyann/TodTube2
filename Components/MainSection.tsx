import Navigation from "../Components/NavMenu";
import VideoCards from "../Components/Videos";

import "../src/styles/MainSection.scss";
import "../src/styles/VideosCards.scss";
export default function MainSection() {
  return (
    <>
      <div className="main-section-wrapper">
        <Navigation />
        <div className="video-wrapper test">
          <VideoCards />
        </div>
      </div>
    </>
  );
}
