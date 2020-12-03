require('es6-promise').polyfill();
require('isomorphic-fetch');

const request = async (options) => {

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json;charset=UTF-8'
  };

  const defaults = {headers: headers};
  options = Object.assign({}, defaults, options);
  const response = await fetch(options.url, options)
  return await response.json()
};

export function fetchVideos() {
  const url = "http://video.yourapi.ru/api-data/video/list"
  return request({
    url: url,
    json: true,
    method: 'GET'
  });
}
//
// export function fetchVideo(videoid) {
//   const url = "https://video.yourapi.ru/api-data/video/4082" + videoid;
//   return fetch(url)
//   .then(res => res.json())
// }
//
