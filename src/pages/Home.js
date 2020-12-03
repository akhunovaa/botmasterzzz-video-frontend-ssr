import React, {Component} from 'react';
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeletons/HomeSkeleton";
import "../sass/Home.css"
import "../sass/VideoGrid.css"

class Home extends Component {
    render() {
        const {videos} = this.props
        if (videos.length === 0) {
            return <Skeleton title={true} />;
        }
        return (
            <div className='home'>
                <h2>Главная страница</h2>

                <div className='video-grid'>
                    {videos.map((video) => (
                        <a key={video.id} href={`/watch/${video.id}`}>
                            <VideoCard video={video}/>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
