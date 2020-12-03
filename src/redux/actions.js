const fetch = require("node-fetch");
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'

const request =  (options) => {

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }

  options = Object.assign({}, config, options);
  return fetch(options.url, options)
      .then(response =>
          response.json().then(json => {
            if (!response.ok) {
              return Promise.reject(json);
            }
            return json;
          })
      ).catch(error => console.log(error))
};

function requestVideos() {
  return {
    type: 'REQUEST_VIDEOS'
  }
}

function receiveVideos(json) {
  return {
    type: 'RECEIVE_VIDEOS',
    videos: json
  }
}

function fetchVideos() {
  return dispatch => {
    dispatch(requestVideos())
    return request({
      url: 'https://video.yourapi.ru/api-data/video/list',
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveVideos(json)))
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

function shouldFetchVideos(state) {
  const videos = state.videos
  if (videos.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}

export function fetchVideosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchVideos(getState())) {
      return dispatch(fetchVideos);
    }
  }
}


// export const getRecommendation = createAsyncThunk(
//     "recommendation/getRecommendation",
//     () => {
//       const { response } = client(`https://video.yourapi.ru/api-data/video/list`);
//       return response;
//     }
// );
