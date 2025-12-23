import { useParams } from "react-router-dom";
import videos from "../../scripts/data.jsx";

type Video = {
  id: number;
  user: string;
  description: string;
  views: number;
  video: string;
};

export default function Focus() {
  const { id } = useParams<{ id: string }>();

  const video = videos.find((item) => item.id === Number(id));

  if (!video) {
    return <h2>Відео не знайдено</h2>;
  }

  return (
    <div className="video-card focus">
      <video className="video_in_focus" src={video.video} controls autoPlay />
      <p className="description">{video.description}</p>
      <h2 className="user">{video.user}</h2>
      <span className="views">{video.views} Переглядів</span>
    </div>
  );
}
