import React, {Component} from 'react'
import {ToastContainer} from 'react-toastify';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import "../sass/Global.css";
import "../sass/Container.css";
import "../sass/Toastify.css";
import WatchVideo from "../pages/WatchVideo";
import {Provider} from "react-redux";
import {fetchVideos} from "../Api";
import configureStore from "../redux/configureStore";

class AppWatchVideo extends Component {


    constructor(props) {
        super(props)
        this.state = {
            initialState: props.initialState || {},
            video: props.video || {},
            comments: props.comments || {},
            videos: props.videos
        }
    }

    componentDidMount() {
        delete window.__VIDEO__
    }

    render() {
        const {initialState} = this.props
        const store = configureStore(initialState);

        const {video, videos, comments} = this.state
        return (
            <Provider store={store}>

                <div>
                    <div/>
                    <ToastContainer
                        autoClose={2500}
                        position="top-left"
                        closeButton={false}
                        style={{height: '50px'}}
                    />
                    <ScrollToTop/>
                    <Navbar/>
                    <Sidebar/>
                    <BottomBar/>
                    <div className='home-container'>
                        <WatchVideo videos={videos} video={video} comments={comments}/>
                    </div>
                </div>
            </Provider>
        );
    }
}

function mapStateToProps({isFetching, videos, video}) {
    return {
        isFetching,
        videos,
        video
    }
}

export default AppWatchVideo;
