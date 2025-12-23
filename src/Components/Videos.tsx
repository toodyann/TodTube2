import "../styles/VideosCards.scss";
import defaultVideos from "../scripts/data.jsx";
import { NavLink } from "react-router-dom";

type Video = {
  id: number;
  user: string;
  description: string;
  views: number;
  video: string;
  image: string;
};
interface Props {
  query?: string;
  videos?: Video[];
}

export default function VideoCards({
  query = "",
  videos = defaultVideos,
}: Props) {
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
        <NavLink key={item.id} to={`/focus/${item.id}`} className="video-link">
          <div className="video-card">
            <img className="prev" src={item.image} />
            <h4>{item.user}</h4>
            <p>{item.description}</p>
            <span>{item.views} Переглядів</span>
          </div>
        </NavLink>
      ))}
    </main>
  );
}
