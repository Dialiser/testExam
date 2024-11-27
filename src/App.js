import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ArtistCard from "./components/ArtistCard";
import SongTable from "./components/SongTable";
import NowPlayingCard from "./components/NowPlayingCard";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <ArtistCard />
        <SongTable onSongClick={handleSongClick} />
        {currentSong && <NowPlayingCard song={currentSong} />}
      </div>
    </div>
  );
};

export default App;
