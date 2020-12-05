import React from "react";
import { timeSince } from "../utils";
import "../sass/VideCard.css"
import "../sass/Avatar.css"

const VideoCard = ({ video }) => {


const profileImageSrc = video.user_telegram_id < 100 ? "https://video.yourapi.ru/default.jpeg" : "https://video.yourapi.ru/api-data/image/profile/" + video.user_telegram_id;
  return (
    <div className='video-card'>
        <img className="thumb" src={video.thumbnail} onError={(e) => {e.target.src = 'https://video.yourapi.ru/default.jpeg'; e.target.onError = null;}} alt={video.title} />
      <div className="video-info-container">
        <div className="channel-avatar">
            <div className='avatar' style={{ marginRight: "0.8rem" }}><img src={profileImageSrc} alt={video.title}/></div>
        </div>
        <div className="video-info">
          <h4>
            {video.title}
          </h4>
            <span className="secondary">{video.description === undefined ? "..." : video.description.length > 40 ? video.description.substring(0, 40) + "..." : video.description}</span>
          <p className="secondary">
            <span>{video.duration || 0} просмотров</span> <span>•</span>{" "}
            <span>{timeSince(video.createdAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
