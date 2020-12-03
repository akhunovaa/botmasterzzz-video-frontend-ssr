import {timeSince} from "../utils";

import "../sass/TrendingCard.css";
import React from "react";

const TrendingCard = ({ video }) => {

        return (
            <div className="trending-card" style={{margin: '1rem 0px 1.4rem', display: 'flex'}}>
                <img className="trending-card-thumb" style={{objectFit: 'cover', width: '250px', height: '140px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px', borderRadius: '4px'}} src={video.thumbnail} onError={(e) => {
                    e.target.src = 'https://video.yourapi.ru/img/default.jpeg';
                    e.target.onError = null;
                }} alt={video.title}/>
                <div className="trending-card-video-info-container" style={{marginLeft: '1.2rem'}}>
                    <h3>{video.title}</h3>
                    <p className="trending-card-p secondary">
                        <span>{video.title}</span>
                        <span>•</span>
                        <span>{video.duration || 0} просмотров</span>
                        <span>•</span> <span>{timeSince(video.createdAt)} назад</span>
                    </p>
                    <p className="trending-card-p secondary">{video.description.substr(0, 130)}</p>
                </div>
            </div>
        );

}

export default TrendingCard;
