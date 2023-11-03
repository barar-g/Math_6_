import React from "react";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import AudioDetails from "./AudioDetails";
import PlayerControls from "./PlayerControls";
import { window } from "d3";

const AudioPlayer = ({ url, title, author, thumbnail }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState(0);


  // components/AudioPlayer.tsx

// event handlers for custom controls

const handlePlay = () => {
  setPlaying(true);
};

const handlePause = () => {
  setPlaying(false);
};

const handleVolumeChange = (newVolume) => {
  setVolume(newVolume);
};

const toggleMute = () => {
  setMuted((prevMuted) => !prevMuted);
};

const handleProgress = (state) => {
  setProgress(state.played);
};

const handleDuration = (duration) => {
  setDuration(duration);
};

const toggleLoop = () => {
  setLoop((prevLoop) => !prevLoop);
};



  return (
    
   

<div>
     

      <div>
     
        {/* <AudioDetails title={title} author={author} thumbnail={thumbnail} /> */}
        <PlayerControls
          playerRef={playerRef}
          playing={playing}
          volume={volume}
          muted={muted}
          progress={progress}
          duration={duration}
          loop={loop}
          // event handler props
          toggleMute={toggleMute}
          handlePlay={handlePlay}
          toggleLoop={toggleLoop}
          handlePause={handlePause}
          handleVolumeChange={handleVolumeChange}
        />
          <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        muted={muted}
        loop={loop}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onDuration={handleDuration}
        style={{ display: 'none' }}
      />
      </div>
    </div>

    
    
  );
};

export default AudioPlayer;