import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../utils";

export const getVideo = createAsyncThunk("video/getVideo",  (videoId) => {
  const { response } = client(
        `https://video.yourapi.ru/api-data/video/${videoId}`
  );
  return response;
});

const videoSlice = createSlice({
  name: "slice",
  initialState: {
    isFetching: true,
    video: {},
  },
  reducers: {
    clearVideo(state, action) {
      state.isFetching = true;
      state.video = {};
    }
  },
  extraReducers: {
    [getVideo.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.video = action.payload;
    },
  },
});

export const {
  clearVideo,
  addComment,
  like,
  dislike,
  cancelLike,
  cancelDislike,
  subscribeFromVideo,
  unsubscribeFromVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
