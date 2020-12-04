import React from "react";
import TrendingCard from "../components/TrendingCard";
import "../sass/VideCard.css"
const Trending = ({video}) => {
    return (
        <div>
            <h2>Тренды</h2>
            <div className="home">
                videos.map((video) => (
                <a href={`/watch/${video.id}`} key={video.id}>
                    <TrendingCard video={video}/>
                </a>
                ))}
            </div>
        </div>
    );
};

export default Trending;
