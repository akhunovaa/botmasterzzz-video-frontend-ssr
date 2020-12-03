import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils";

export const getRecommendation = createAsyncThunk(
  "recommendation/getRecommendation", () => {
    const { response } = client(`https://video.yourapi.ru/api-data/video/list`);
    return response;
  }
);

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    isFetching: true,
    videos: [],
  },
  reducers: {
    addToRecommendation(state, action) {
      state.videos = [action.payload, ...state.videos];
    },
  },
  extraReducers: {
    [getRecommendation.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.videos = action.payload;
    },
  },
});

export const { addToRecommendation } = recommendationSlice.actions;

export default recommendationSlice.reducer;
