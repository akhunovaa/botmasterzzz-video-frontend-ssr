import React, {useRef} from "react";
import videojs from "video.js";
import "../sass/video-js.css"
// import "video.js/dist/video-js.css";
import window from 'global'

class Player extends React.Component {

    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function
            onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    componentWillReceiveProps(newProps) {
        const {video} = this.props;
        if (this.player) {
            this.player.src({
                type: 'video/mp4',
                src: video.src
            });

            this.player.options({
                autoplay: false,
                loop: false,
                preload: 'metadata',
                language: 'ru',
                height: 640,
                poster: video.thumbnail
            });
        }
    }


    constructor(props) {
        super(props)
        this.state = {
            video: props.video || {},
        }
    }

    render() {
      const {video, previewUrl} = this.props;

      //
      // this.player.on("ended", () => {
      //   client(`https://video.yourapi.ru/api-data/video/get/${video.id}`);
      // });

        if (this.player) {
            this.player.dispose();
        }

        return (
            <div className='data-vjs-player' style={{maxHeight: '640px', width: '100%'}}>
                {/*<video*/}
                {/*  controls*/}
                {/*  ref={videoRef}*/}
                {/*  className="video-js  vjs-big-play-centered"*/}
                {/*></video>*/}
                {/*vjs-fluid*/}
                {/*style={{maxHeight: '640px', width: '100%'}}*/}

            {/*    width: '100%',*/}
            {/*    minWidth: '480px'*/}
            {/*} : 0}*/}
                <video poster={video.thumbnail} id="currentVideo" style={window.innerWidth <= 400 ? {width: '100%', minHeight: '640px', minWidth: '340px'} : {width: '100%', minHeight: '640px', minWidth: '330px'}} className="video-js video-nn vjs-big-play-centered" controls ref={ node => this.videoNode = node } >
                    <source src={video.src}/>
                </video>
            </div>
        );
    }
}

export default Player;
