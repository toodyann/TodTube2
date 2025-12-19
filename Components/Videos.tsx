import "../src/styles/VideosCards.scss";
import data from "../src/js/data.js";

function VideoCard({ item }: any) {
  return (
    <div className="video-card">
      <video className="video" src={item.video} controls />
      <h4>{item.user}</h4>
      <p>{item.description}</p>
      <span>{item.views} Переглядів</span>
    </div>
  );
}

export default function VideoCards() {
  return (
    <main className="video-wrapper">
      {data.map((item: any) => (
        <VideoCard
          key={item.id}
          item={item}
          user={item.user}
          description={item.description}
          views={item.views}
        />
      ))}
    </main>
  );
}
