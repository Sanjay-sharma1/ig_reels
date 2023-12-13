import React from 'react';
import './VideoFooter.css';

function VideoFooter({channel, avatarSrc, likes, shares, song}) {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <img src={avatarSrc} className='igDP' alt="" />
        <h3>
            {channel} <button>Follow</button>
        </h3>
      </div>
      <div className="videoFooter_song">
        <div className="videoFooter_icon">
            <i class="fi fi-rr-play"></i>
        </div>
        <h4>
            {song}
        </h4>
      </div>
      <div className="sideIcons">
        <div className="likeicon">
            <i className="icons fi fi-rs-heart"></i>
            {likes}
        </div>
        <div className="commentIcon">
            <i className="icons fi fi-rs-beacon"></i>
            100
        </div>
        <div className="shareicon">
            <i className="icons fi fi-rs-paper-plane"></i>
            {shares}
        </div>
      </div>
    </div>
  )
}

export default VideoFooter
