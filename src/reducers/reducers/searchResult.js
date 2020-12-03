import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils";

export const getSearchResults = createAsyncThunk(
  "searchResult",
  (searchTerm) => {
    const { response } = client(
      `https://video.yourapi.ru/api-data/video/search?searchterm=${searchTerm}`
    );
    //
    // const { response } = await client(
    //   `http://127.0.0.1:7100/api-data/video/search?searchterm=${searchTerm}`
    // );

    return {response};
  }
);

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    isFetching: true,
    videos: [],
  },
  reducers: {
    clearSearchResults(state, action) {
      state.videos = [];
      state.isFetching = true;
    },
  },
  extraReducers: {
    [getSearchResults.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.videos = action.payload.response;
    },
  },
});

export const {
  toggleSubscribeSearchResults,
  unsubscribeFromSearchResults,
  clearSearchResults,
} = searchResultSlice.actions;

export default searchResultSlice.reducer;
