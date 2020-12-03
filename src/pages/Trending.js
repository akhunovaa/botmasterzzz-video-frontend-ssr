import React from "react";
import TrendingCard from "../components/TrendingCard";

const Trending = ({video}) => {
    return (
        <div>
            <h2>Тренды</h2>
            <div className="trending">
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
