import React from "react";
import styled from "styled-components";
import { timeSince } from "../utils";
import Avatar from "../styles/Avatar";

const Wrapper = styled.div`
  margin: 1.4rem 0;
  margin-top: 1rem;
  display: flex;

  .thumb {
    width: 250px;
    height: 140px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .video-info-container {
    margin-left: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }

  p:last-child {
    margin-top: 0.2rem;
  }

  p span {
    padding-right: 0.3rem;
  }

  @media screen and (max-width: 750px) {
    margin: 1.2rem 0;

    .video-info-container {
      margin-left: 1.5rem;
    }
  }

  @media screen and (max-width: 645px) {
    flex-direction: column;

    .video-info-container {
      padding-bottom: 1rem;
    }

    .thumb {
      width: 100%;
      height: 300px;
    }

    .video-info-container {
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 530px) {
    .thumb {
      width: 100%;
      height: 250px;
    }
  }

  @media screen and (max-width: 420px) {
    .thumb {
      width: 100%;
      height: 200px;
    }
  }
`;

const TrendingCard = ({ video }) => {
  return (
    <Wrapper>
      <img className="thumb" style={{objectFit: 'cover'}} src={video.thumbnail} onError={(e) => {e.target.src = 'https://video.yourapi.ru/img/default.jpeg'; e.target.onError = null;}} alt={video.title} />
      <div className="video-info-container">
          <div className="channel-avatar">
              <Avatar
                  style={{ marginRight: "0.8rem" }}
                  src="https://video.yourapi.ru/default.jpeg"
                  alt={video.title}
              />
          </div>
        <h3>{video.title}</h3>
        <p className="secondary">
          <span>{video.title}</span>
          <span>•</span>
          <span>{video.duration || 0} просмотров</span>
          <span>•</span> <span>{timeSince(video.createdAt)} назад</span>
        </p>
        <p className="secondary">{video.description.substr(0, 130)}</p>
      </div>
    </Wrapper>
  );
};

export default TrendingCard;
