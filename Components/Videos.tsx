import "../src/styles/VideosCards.scss";
import defaultVideos from "../src/scripts/data.jsx";

type Video = {
  id: number;
  user: string;
  description: string;
  views: number;
  video: string;
};

function VideoCard({ item }: { item: Video }) {
  return (
    <div className="video-card">
      <video className="video" src={item.video} controls />
      <h4>{item.user}</h4>
      <p>{item.description}</p>
      <span>{item.views} Переглядів</span>
    </div>
  );
}

interface Props {
  query?: string;
  videos?: Video[];
}

export default function VideoCards({ query = "", videos }: Props) {
  const source = videos ?? defaultVideos;
  const q = (query || "").toLowerCase();

  const filteredVideos = source.filter(
    (item) =>
      item.user.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
  );

  return (
    <main className="video-wrapper">
      {filteredVideos.map((item: Video) => (
        <VideoCard key={item.id} item={item} />
      ))}
    </main>
  );
}
