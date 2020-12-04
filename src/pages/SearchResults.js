import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import NoResults from "../components/NoResults";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getSearchResults, clearSearchResults } from "../reducers/reducers/searchResult";

const StyledChannels = styled.div`
  margin-top: 1rem;
`;

const SearchResults = () => {
  const { searchterm } = useParams();

  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector(
    (state) => state.searchResult
  );

  useEffect(() => {
    dispatch(getSearchResults(searchterm));

    return () => {
      dispatch(clearSearchResults());
    };
  }, [dispatch, searchterm]);

  if (isFetching) {
    return <Skeleton title="true" />;
  }

  if (!isFetching && !videos.length) {
    return <NoResults title="Ничего не найдено..." text="Попробуйте другой запрос или попробуйте поискать в нашем уютном Телеграмм боте: https://t.me/tiktiktokrobot 😊" />;
  }

  return (
    <StyledTrending>
      <h2>Результаты поиска</h2>
      <div className='video-grid'>
        {videos.map((video) => (
            <a key={video.id} href={`/watch/${video.id}`}>
              <TrendingCard video={video} />
            </a>
        ))}
      </div>
    </StyledTrending>
  );
};

export default SearchResults;
