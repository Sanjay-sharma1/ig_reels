import './App.css';
import VideoCard from './VideoCard';
import igLogo from "./instagram.png"
import igDP from './igDP.jpg';
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'
import video4 from './videos/video4.mp4'
import video5 from './videos/video5.mp4'
import video6 from './videos/video6.mp4'
import video7 from './videos/video7.mp4'
import video8 from './videos/video8.mp4'
import video9 from './videos/video9.mp4'
import video10 from './videos/video10.mp4'
import video11 from './videos/video11.mp4'
import video12 from './videos/video12.mp4'
import video13 from './videos/video13.mp4'

function App() {

  return (
    <div className="App">
      <div className="app_top">
        <img 
          className="app_logo" 
          src= {igLogo}
          alt="app_logo" 
        />
        <h1>Reels</h1>
      </div>
      <div className="video_container">
        
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video1}
            likes = "288"
            comment = "12"
            shares = "5"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video2}
            likes = "270"
            comment = "13"
            shares = ""
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video3}
            likes = "174"
            comment = "10"
            shares = "2"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video4}
            likes = "204"
            comment = "10"
            shares = "2"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video5}
            likes = "5259"
            comment = "195"
            shares = "126"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video6}
            likes = "363"
            comment = "21"
            shares = "6"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video7}
            likes = "207"
            comment = "14"
            shares = ""
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video8}
            likes = "284"
            comment = "17"
            shares = "3"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video9}
            likes = "466"
            comment = "37"
            shares = "2"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video10}
            likes = "239"
            comment = "13"
            shares = "2"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video11}
            likes = "1112"
            comment = "35"
            shares = "7"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video12}
            likes = "1048"
            comment = "94"
            shares = "10"
          />
          <VideoCard 
            channel = "KashishJhegta"
            avatarSrc = {igDP}
            song = "I love you - Sanju"
            url = {video13}
            likes = "246"
            comment = "14"
            shares = ""
          />
      </div>
    </div>
  );
}

export default App;
