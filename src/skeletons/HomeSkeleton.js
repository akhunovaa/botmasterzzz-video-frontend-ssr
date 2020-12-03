import React from "react";
import StyledHome from "../pages/Home";
import "../sass/VideoGrid.css"
import "../sass/SkeletonLine.css"

const HomeSkeleton = ({ title }) => {
  return (
    <StyledHome>
      {title && <div className='skeleton-line-q'/>}
      {!title && <div style={{ marginTop: "2rem" }} />}
      <div className='video-grid'>
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
        <div className='video-card-skeleton' />
      </div>
    </StyledHome>
  );
};

export default HomeSkeleton;
