import React from "react";
import "../sass/NoResults.css"

const NoResults = ({ title, text }) => {
  return (
    <div className='no-result'>
      <img className='no-result-img' src={"https://video.yourapi.ru/default.jpeg"} alt="Результатов нет..." />
      <h2>{title}</h2>
      <p className="secondary">{text}</p>
    </div>
  );
};

export default NoResults;
