import React from "react";
import "../sass/NoResults.css"

const NoResults = ({title, text}) => {
    return (
        <div className='no-result'>
            <a href="https://video.yourapi.ru">
                <img className='no-result-img' src={"https://video.yourapi.ru/default.jpeg"} alt="Ничего не найдено..."/>
            </a>
            <h2>{title}</h2>
            <a href="https://t.me/tiktiktokrobot">
                <p className="secondary">{text}</p>
            </a>

        </div>
    );
};

export default NoResults;
