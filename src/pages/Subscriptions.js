import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import { StyledHome } from "./Home";
import VideoGrid from "../styles/VideoGrid";
import Skeleton from "../skeletons/HomeSkeleton";
import { getFeed } from "../reducers/reducers/feed";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <StyledHome>
      <div style={{ marginTop: "1.5rem" }}></div>

      <VideoGrid>
        {!isFetching &&
          videos.map((video) => (
            <a key={video.id} href={`/watch/${video.id}`}>
              <VideoCard hideavatar={true} video={video} />
            </a>
          ))}
      </VideoGrid>
    </StyledHome>
  );
};

export default Subscriptions;
