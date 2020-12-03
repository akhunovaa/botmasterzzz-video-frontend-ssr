import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTrending } from "./Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getHistory } from "../reducers/reducers/history";
import TrendingCard from "../components/TrendingCard";

const History = ({ nopad }) => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <StyledTrending nopad={nopad}>
      <h2>History</h2>

      {!isFetching && !videos.length && (
        <p className="secondary">
          Videos that you have watched will show up here
        </p>
      )}

      {videos.map((video) => (
        <a key={video.id} href={`/watch/${video.id}`}>
          <TrendingCard video={video} />
        </a>
      ))}
    </StyledTrending>
  );
};

export default History;
