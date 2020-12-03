import React from "react"
import { fetchVideos } from "./Api"
import App from './components/App'
import configureStore from "./redux/configureStore";
import {Provider} from "react-redux";

class Videos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: props.videos || []
    }
  }
  componentDidMount() {
    const videos = window.__VIDEOS__ ? JSON.parse(window.__VIDEOS__) : []
    delete window.__VIDEOS__
    this.setState({ videos })
    if (videos.length == 0) {
      fetchVideos()
      .then(json => {
        this.setState({ videos: json.response })
      })
    }
  }
  render() {
    let initialState = {
      isFetching: false,
      videos: this.state.videos,
      sidebar: false
    }
    const store = configureStore(initialState)
    return (
        <Provider store={store}>
          <App videos={this.state.videos}/>
        </Provider>

    )
  }
}

export default Videos
