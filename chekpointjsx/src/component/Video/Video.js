import React from 'react'
import './Video.css';
import chat from './chat.mp4';

const Video = () => {
    return (
        <div className="StyleVideo">
            {/* <iframe src="https://www.youtube.com/embed/668nUCeBHyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <video width="320" height="240" controls src={chat} type="video/mp4" >

</video>
        </div>
    )
}

export default Video
