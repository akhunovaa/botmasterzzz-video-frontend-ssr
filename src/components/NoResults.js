import React from "react";
import "../sass/NoResults.css"

const NoResults = ({title, text}) => {
    return (
        <div className='no-result'>
            <a href="https://video.yourapi.ru">
                <img className='no-result-img' src={"https://video.yourapi.ru/img/nn_bot_logo_1024x1024.png"} alt="Ничего не найдено..."/>
            </a>
            <h2>{title}</h2>
            <a target="_blank" href="https://t.me/tiktiktokrobot">
                <p className="secondary">{text}</p>
            </a>

        </div>
    );
};

export default NoResults;
