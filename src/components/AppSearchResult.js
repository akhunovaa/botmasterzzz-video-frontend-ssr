import React, {Component} from 'react'
import {ToastContainer} from 'react-toastify';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import "../sass/Global.css";
import "../sass/Container.css";
import "../sass/Toastify.css";
import "../sass/Trending.css";
import {Provider} from "react-redux";

import configureStore from "../redux/configureStore";
import NoResults from "./NoResults";
import TrendingCard from "./TrendingCard";

class AppSearchResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            initialState: props.initialState || {},
            searchTerm: props.searchTerm,
            videos: props.videos
        }
    }

    componentDidMount() {
        delete window.__VIDEOS__
    }

    render() {
        const {initialState} = this.props
        const store = configureStore(initialState);

        const {videos} = this.state;

        if (undefined === videos || videos.length === 0) {
            return (
                <Provider store={store}>
                    <div>
                        <div/>
                        <ToastContainer
                            autoClose={2500}
                            position="top-right"
                            closeButton={false}
                        />
                        <ScrollToTop/>
                        <Navbar/>
                        <Sidebar/>
                        <BottomBar/>
                        <div className='home-container'>
                            <NoResults title="Ничего не найдено..."
                                       text="Попробуйте другой запрос или попробуйте поискать в нашем уютном Телеграмм боте: https://t.me/tiktiktokrobot 😊"/>
                        </div>
                    </div>
                </Provider>)
        }

        return (
            <Provider store={store}>
                <div>
                    <div/>
                    <ToastContainer
                        autoClose={2500}
                        position="top-right"
                        closeButton={false}
                    />
                    <ScrollToTop/>
                    <Navbar/>
                    <Sidebar/>
                    <BottomBar/>
                    <div className='home-container'>
                        <div className='home' style={{padding: '2rem 1.3rem 7rem', width: '85%', margin: '0px auto'}}>
                            <h2>Результаты поиска</h2>
                            <div className='video-grid'>
                                {videos.map((video) => (
                                    <a key={video.id} href={`/watch/${video.id}`}>
                                        <TrendingCard video={video}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

function mapStateToProps({isFetching, videos, video}) {
    return {
        isFetching,
        videos,
        video
    }
}

export default AppSearchResult;
