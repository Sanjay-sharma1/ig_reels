import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard( {channel, avatarSrc, song, url, likes,comment, shares} ) {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = ()=>{
    if (isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false)
    } else{
      videoRef.current.play();
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className='videoCard'>
      <VideoHeader/>
      <video 
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
        className='videoCard_player'
        loop
        />
        <VideoFooter
          channel = {channel}
          avatarSrc = {avatarSrc}
          shares = {shares}
          likes = {likes}
          comment = {comment}
          song = {song}
        />
    </div>
  )
}

export default VideoCard
