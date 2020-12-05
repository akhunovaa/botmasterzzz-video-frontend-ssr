import React from "react";
import "../sass/WatchVideo.css"
import "../sass/Comments.css"
// UI elements
import Player from "../components/Player";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";

// reducers and others
import {timeSince} from "../utils";

class WatchVideo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            video: props.video,
            comments: props.comments,
            videos: props.videos
        }

    }

    componentDidMount() {

    }

    render() {
        const {video, videos, comments} = this.state;

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
                                <div className="comment">
                                    <a target="_blank" href={video.author ? `https://t.me/${video.author}` : '#'}>
                                        {
                                            video.user_telegram_id !== 0
                                                ? (<img src={`https://video.yourapi.ru/api-data/image/profile/${video.user_telegram_id}`} alt="Фотография отсутствует"/>)
                                                : (<img src={`https://video.yourapi.ru/default.jpeg`} alt="Фотография отсутствует"/>)
                                        }
                                    </a>
                                    <h3>{video.title + ' - ' + video.description}</h3>
                                </div>

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
                            <div className='comments'>
                                <div style={{display: 'inline-flex'}}>
                                    <h3>Комментарии ({comments?.length}) <a style={{color: '#8a8a8a', size: 16}} href="https://t.me/tiktiktokrobot" target="_blank">[комментировать]</a></h3>
                                </div>

                                {/*<div className="add-comment">*/}
                                {/*    /!*<img src={user.avatar} alt="avatar"/>*!/*/}
                                {/*    <textarea*/}
                                {/*        placeholder="Add a public comment"*/}
                                {/*        value={comment.value}*/}
                                {/*        onKeyDown={handleAddComment}*/}
                                {/*        onChange={comment.onChange}*/}
                                {/*    />*/}
                                {/*</div>*/}

                                {comments && comments.map((comment) => (
                                    <div key={comment.id} className="comment">
                                        <a target="_blank" href={comment.nickname ? `https://t.me/${comment.nickname}` : '#'}>
                                            <img src={`https://video.yourapi.ru/api-data/image/profile/${comment.user_telegram_id}`} alt="Фотография отсутствует"/>
                                        </a>
                                        <div className="comment-info">
                                            <p className="secondary">
                <span>
                  <a target="_blank" href={comment.nickname ? `https://t.me/${comment.nickname}` : '#'}>
                    {comment.user}
                  </a>

                </span>
                 <span style={{marginLeft: "0.6rem"}}>
                  | {timeSince(comment.time)}
                </span>
                                            </p>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
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

