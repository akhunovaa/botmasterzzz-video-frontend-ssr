import React from "react";
import MetaTags from 'react-meta-tags';
import "../sass/WatchVideo.css"
// UI elements
import Player from "../components/Player";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import {fetchVideos} from "../Api";

// reducers and others
import {timeSince} from "../utils";

class WatchVideo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            video: props.video,
            videos: props.videos
        }

    }

    componentDidMount() {

    }

    render() {
        const {video, videos} = this.state;

        // const videos = fetchVideos().then(response => {
        //     return JSON.stringify(response.response);
        // }).catch(error => console.log(error));

        if (!video) {
            return (
                <NoResults
                    title="Страница не найдена"
                    text="Страница не найдена или была удалена..."
                />
            );
        } else {
            return (
                <div>
                    <div className='watch-video'>
                        <div className="video-container">
                            <div className="video"><Player video={video}/></div>

                            <div className="video-info">
                                <h3>{video.title + ' - ' + video.description}</h3>

                                <div className="video-info-stats">
                                    <p>
                                        {/*<span>{videox.views} </span> <span>•</span>{" "}*/}
                                        <span>{timeSince(video.createdAt)} </span>
                                    </p>
                                </div>
                            </div>

                            <div className="channel-info-description">
                                <p>{video.description}</p>
                            </div>
                        </div>

                        <div className="related-videos">
                            <h3 style={{marginBottom: "1rem"}}>Следующее</h3>
                            {videos.filter((vid) => vid.id !== video.id)
                                .slice(0, 10)
                                .map((video) => (
                                    <a key={video.id} href={`/watch/${video.id}`}>
                                        <VideoCard key={video.id} hideavatar={true} video={video}/>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default WatchVideo;

