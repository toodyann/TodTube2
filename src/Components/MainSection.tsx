import Navigation from "./NavMenu";
import VideoCards from "./Videos";

import "../styles/MainSection.scss";
import "../styles/VideosCards.scss";

type Props = {
  query: string;
  videos: any[];
};

export default function MainSection({ query, videos }: Props) {
  return (
    <div className="main-section-wrapper">
      <Navigation />
      <div className="video-wrapper test">
        <VideoCards query={query} videos={videos} />
      </div>
    </div>
  );
}
