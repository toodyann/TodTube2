import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import videos from "../../scripts/data.jsx";
import Header from "../../Components/Header";

import playIcon from "../../assets/play.svg";
import pauseIcon from "../../assets/pause.svg";

export default function Focus() {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((v) => v.id === Number(id));

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("0:00 / 0:00");

  if (!video) return <h2>Відео не знайдено</h2>;

  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
    setPlaying(!videoRef.current.paused);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const onTimeUpdate = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;
    const p = (v.currentTime / v.duration) * 100;
    setProgress(p);
    setTime(`${fmt(v.currentTime)} / ${fmt(v.duration)}`);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const fmt = (s: number) =>
    !s
      ? "0:00"
      : `${Math.floor(s / 60)}:${Math.floor(s % 60)
          .toString()
          .padStart(2, "0")}`;

  return (
    <div className="focus">
      <Header query="" setQuery={() => {}} />
      <div className="yt-player">
        <video
          ref={videoRef}
          src={video.video}
          onTimeUpdate={onTimeUpdate}
          onClick={togglePlay}
          autoPlay
        />

        <div className="yt-controls">
          <button onClick={togglePlay}>
            {playing ? (
              <img src={pauseIcon} alt="Pause" />
            ) : (
              <img src={playIcon} alt="Play" />
            )}
          </button>

          <div className="yt-progress" onClick={seek}>
            <div className="yt-filled" style={{ width: `${progress}%` }} />
          </div>

          <span>{time}</span>
          <button onClick={toggleFullscreen}>⛶</button>
        </div>
      </div>
      <div className="items">
        <p className="description">{video.description}</p>{" "}
        <h2 className="user">{video.user}</h2>{" "}
        <span className="views">{video.views} Переглядів</span>
      </div>
    </div>
  );
}
