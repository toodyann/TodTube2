import "../styles/VideosCards.scss";
import defaultVideos from "../scripts/data.jsx";
import { NavLink } from "react-router-dom";

type image = {
  id: number;
  user: string;
  description: string;
  views: number;
  image: string;
};

function VideoCard({ item }: { item: image }) {
  return (
    <>
      <NavLink to="/focus">
        {" "}
        <div className="video-card">
          <img className="video" src={item.image} />
          {item.user}
          <p>{item.description}</p>
          <span>{item.views} Переглядів</span>
        </div>
      </NavLink>
    </>
  );
}

interface Props {
  query?: string;
  image?: image[];
}

export default function VideoCards({ query = "", image }: Props) {
  const source = image ?? defaultVideos;
  const q = (query || "").toLowerCase();

  const filteredVideos = source.filter(
    (item) =>
      item.user.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
  );

  return (
    <main className="video-wrapper">
      {filteredVideos.map((item: image) => (
        <VideoCard key={item.id} item={item} />
      ))}
    </main>
  );
}
