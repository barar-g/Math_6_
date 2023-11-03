// components/PlayerControls.jsx

import { useEffect, useMemo, useRef, useState } from "react";
// components/PlayerControls.tsx

import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import  Duration  from "./Durations";


const PlayerControls = ({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}) => {
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const playPauseButtonRef = useRef(null);

  // components/PlayerControls.tsx

const togglePlayAndPause = () => {
  if (playing) {
    handlePause();
  } else {
    handlePlay();
  }
};

function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

const handleTouchStart = (e) => {
  e.preventDefault();
  disableScrolling();
  setPlayed(parseFloat(e.target.value));
  playerRef.current?.seekTo(parseFloat(e.target.value));
  setSeeking(true);
};


const handleTouchEnd = () => {
  enableScrolling();
};

const handleSeekMouseDown = (e) => {
  setSeeking(true);
};

const handleSeekChange = (e) => {
  setPlayed(parseFloat(e.target.value));
};

const handleSeekMouseUp = (e) => {
  playerRef.current?.seekTo(parseFloat(e.target.value));
  setSeeking(false);
};

const handleChangeInVolume = (e) => {
  handleVolumeChange(Number(e.target.value));
};

useEffect(() => {
  playPauseButtonRef.current?.focus();
}, [])

// components/PlayerControls.tsx

useMemo(() => {
  setPlayed((prevPlayed) => {
    if (!seeking && prevPlayed !== progress) {
      return progress;
    }
    return prevPlayed;
  });
}, [progress, seeking]);



  return (
    <div style={{ backgroundColor: '#F3F4F6', borderRadius: '2rem 2rem 2rem 2rem', padding: '1rem 0' }}>
  <div style={{ background: "#f7f7f7", borderRadius: "0 0 0.5rem 0.5rem", padding: "1rem 0" }}>
    <div style={{ marginBottom: "0rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", padding: "0 1rem" }}>
      {/* duration: time played  */}
      <div style={{ fontSize: '0.8rem', color: 'gray' }}>
        <Duration seconds={duration * played} />
      </div>

      {/* progress bar */}
      <div style={{ flex: 1, margin: "auto" }}>
        <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
          style={{
            width: "180%",
            height: "1rem",
            borderRadius: "0.4rem",
            backgroundColor: "#2e3a4d",
            color: "#1a1a1a",
            outline: "none",
          }}
        />
      </div>
      {/* duration: time left */}
      <div style={{ fontSize: '0.8rem', color: 'gray', flex: "1", textAlign: "right" }}>
        <Duration seconds={duration * (1 - played)} />
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", padding: "1rem 0" }}>
      {/* loop button */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={toggleLoop}
          style={{
            fontWeight: "bold",
            padding: "0.8rem",
            border: "1px solid #00a5ff",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          className={loop ? "text-cyan-500" : ""}
        >
          <ImLoop />
        </button>
      </div>

      {/* play/pause button */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          ref={playPauseButtonRef}
          onClick={togglePlayAndPause}
          style={{
            padding: "0.8rem",
            border: "1px solid #00a5ff",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
        >
          {playing ? <CiPause1 /> : <CiPlay1 />}
        </button>
      </div>

      {/* volume control */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.1rem" }}>
        {/* mute button */}
        <button onClick={toggleMute}>
          {muted ? <VscMute /> : <VscUnmute />}
        </button>

        {/* volume slider */}
        <input
          type="range"
          style={{
            width: "50%",
            height: "0.2rem",
            borderRadius: "0.4rem",
            backgroundColor: "#2e3a4d",
            color: "#1a1a1a",
          }}
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleChangeInVolume}
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default PlayerControls;
