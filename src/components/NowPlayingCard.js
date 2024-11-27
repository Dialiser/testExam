import React, { useEffect, useRef, useState } from "react";

const NowPlayingCard = ({ song }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.pause(); // Ensure any playing audio is paused
          audioRef.current.load(); // Reload the new song
          await audioRef.current.play(); // Play the new song
        } catch (error) {
          console.error("Audio playback error:", error);
        }
      }
    };

    playAudio();

    // Add event listener to update current time dynamically
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [song]);

  return (
    <div className="now-playing-card">
      <h4 className="now-playing-title">Now Playing</h4>
      <img
        src={song.image}
        alt={song.title}
        className="now-playing-image"
        style={{ width: "220px", height: "120px", borderRadius: "10px" }}
      />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.album}</p>
      </div>
      <div className="progress-bar">
        <span>{formatTime(currentTime)}</span> {/* Display current time */}
        <input
          type="range"
          min="0"
          max={audioRef.current?.duration || 100}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value; // Allow seeking
            setCurrentTime(e.target.value);
          }}
          className="slider"
        />
        <span>{song.time}</span>
      </div>
      <div className="controls">
        <button onClick={() => (audioRef.current.currentTime -= 10)}>⏮️</button>
        <button
          onClick={() =>
            audioRef.current.paused
              ? audioRef.current.play()
              : audioRef.current.pause()
          }
        >
          {audioRef.current?.paused ? "▶️" : "⏸️"}
        </button>
        <button onClick={() => (audioRef.current.currentTime += 10)}>⏭️</button>
      </div>
      <audio ref={audioRef} controls style={{ display: "none" }}>
        <source src={song.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default NowPlayingCard;
