import Video from "../src/assets/main-video.mp4";
import "../src/styles/VideosCards.scss";
function Videos() {
  return (
    <video
      className="videos"
      controls
      width="600"
      src={Video}
      type="video/mp4"
    ></video>
  );
}

export default function VideoCards() {
  return <Videos />;
}
