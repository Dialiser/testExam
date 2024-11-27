import React from "react";
import billieJeanImage from "../assets/images.png";
import beatItImage from "../assets/images.png";
import smoothCriminalImage from "../assets/images.png";
import dontStopImage from "../assets/images.png";
import rockWithYouImage from "../assets/images.png";

import ramcc from "../songs/dd.mp3";
import dd1 from "../songs/dd1.mp3";
import dd2 from "../songs/dd2.mp3";
import dd3 from "../songs/dd3.mp3";
import dd4 from "../songs/dd4.mp3";
import dd5 from "../songs/dd5.mp3";
import dd6 from "../songs/dd6.mp3";
import dd7 from "../songs/dd7.mp3";
import dd8 from "../songs/dd8.mp3";
import dd9 from "../songs/dd9.mp3";

const SongTable = ({ onSongClick }) => {
  const songs = [
    {
      id: 1,
      title: "Billie Jean",
      plays: "1,040,814,084",
      time: "2:52",
      album: "Thriller 25",
      image: billieJeanImage,
      url: ramcc, // Corrected to 'url'
    },
    {
      id: 2,
      title: "Beat It",
      plays: "643,786,045",
      time: "2:44",
      album: "Thriller 25",
      image: beatItImage,
      url: dd1, // Corrected to 'url'
    },
    {
      id: 3,
      title: "Smooth Criminal",
      plays: "407,234,004",
      time: "4:17",
      album: "Thriller 25",
      image: smoothCriminalImage,
      url: dd2, // Corrected to 'url'
    },
    {
      id: 4,
      title: "Don't Stop 'Til You Get Enough",
      plays: "316,391,952",
      time: "6:05",
      album: "Bad 25th Anniversary",
      image: dontStopImage,
      url: dd3, // Corrected to 'url'
    },
    {
      id: 5,
      title: "Rock With You",
      plays: "268,187,218",
      time: "3:40",
      album: "Off The Wall",
      image: rockWithYouImage,
      url: dd4, // Corrected to 'url'
    },
    {
      id: 6,
      title: "Billie Jean (Again)",
      plays: "1,040,814,084",
      time: "4:53",
      album: "Thriller 25",
      image: billieJeanImage,
      url: dd5, // Corrected to 'url'
    },
    {
      id: 7,
      title: "Beat It (Again)",
      plays: "643,786,045",
      time: "4:18",
      album: "Thriller 25",
      image: beatItImage,
      url: dd6, // Corrected to 'url'
    },
    {
      id: 8,
      title: "Smooth Criminal (Again)",
      plays: "407,234,004",
      time: "4:17",
      album: "Thriller 25",
      image: smoothCriminalImage,
      url: dd7, // Corrected to 'url'
    },
    {
      id: 9,
      title: "Don't Stop (Again)",
      plays: "316,391,952",
      time: "6:05",
      album: "Bad 25th Anniversary",
      image: dontStopImage,
      url: dd8, // Corrected to 'url'
    },
    {
      id: 10,
      title: "Rock With You (Again)",
      plays: "268,187,218",
      time: "3:40",
      album: "Off The Wall",
      image: rockWithYouImage,
      url: dd9, // Corrected to 'url'
    },
  ];

  return (

    
    <table className="song-table">
       
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Title</th>
          <th>Playing</th>
          <th>Time</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr key={song.id} onClick={() => onSongClick(song)}>
            <td>{index + 1}</td>
            <td>
              <img
                src={song.image}
                alt={song.title}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </td>
            <td>{song.title}</td>
            <td>{song.plays}</td>
            <td>{song.time}</td>
            <td>{song.album}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;
