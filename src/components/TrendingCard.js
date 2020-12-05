import {timeSince} from "../utils";

import "../sass/TrendingCard.css";
import "../sass/VideCard.css"
import React from "react";

const TrendingCard = ({ video }) => {

        return (
            <div className='video-card'>
                <img className="thumb" src={video.thumbnail} onError={(e) => {e.target.src = 'https://video.yourapi.ru/default.jpeg'; e.target.onError = null;}} alt={video.title} />
                <div className="video-info-container">
                <div className="video-info">
                    <h3>{video.title}</h3>
                    <span className="secondary">{video.description === undefined ? "..." : video.description.length > 40 ? video.description.substring(0, 40) + "..." : video.description}</span>
                    <p className="secondary">
                        <span>{video.title}</span>
                        <span>•</span>
                        <span>{video.duration || 0} просмотров</span>
                        <span>•</span> <span>{timeSince(video.createdAt)}</span>
                    </p>
                </div>
                </div>
            </div>
        );

}

export default TrendingCard;
