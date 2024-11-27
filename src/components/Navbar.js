import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

const Navbar = () => {
  const [query, setQuery] = useState(''); // State to hold the search query

  // List of singers (add more as needed)
  const singers = [
    'Michael Jackson', 'Elvis Presley', 'Madonna', 'The Beatles', 'Whitney Houston',
    'Celine Dion', 'Frank Sinatra', 'Adele', 'Taylor Swift', 'Ed Sheeran',
    'Beyoncé', 'Rihanna', 'Justin Bieber', 'Lady Gaga', 'Elton John',
    'Kanye West', 'Jay-Z', 'Eminem', 'Drake', 'Mariah Carey',
    'Bruno Mars', 'Selena Gomez', 'Shakira', 'Katy Perry', 'Usher',
    'Ariana Grande', 'Billie Eilish', 'Sam Smith', 'Dua Lipa', 'The Weeknd',
    'Lana Del Rey', 'John Legend', 'Harry Styles', 'Doja Cat', 'Olivia Rodrigo',
    'Coldplay', 'Imagine Dragons', 'Pink Floyd', 'Queen', 'Led Zeppelin',
    'Bob Marley', 'Nicki Minaj', 'Cardi B', 'Chris Brown', 'Jennifer Lopez',
    'Britney Spears', 'Camila Cabello', 'Shawn Mendes', 'Lil Nas X', 'Post Malone',
    'J Balvin', 'Bad Bunny', 'Daddy Yankee', 'Maluma', 'Anitta',
    'Justin Timberlake', 'Pharrell Williams', 'David Guetta', 'Calvin Harris', 'Avicii',
    'Maroon 5', 'One Direction', 'The Rolling Stones', 'U2', 'Nirvana',
    'The Doors', 'Red Hot Chili Peppers', 'Metallica', 'Green Day', 'Linkin Park',
    'Bon Jovi', 'Aerosmith', 'Eagles', 'Fleetwood Mac', 'The Who',
    'ABBA', 'The Supremes', 'Jackson 5', 'Bee Gees', 'Earth, Wind & Fire',
    'The Beach Boys', 'Prince', 'David Bowie', 'Stevie Wonder', 'James Brown',
    'Aretha Franklin', 'Otis Redding', 'Ray Charles', 'Louis Armstrong', 'Ella Fitzgerald',
    'Diana Ross', 'Barbra Streisand', 'Andrea Bocelli', 'Luciano Pavarotti', 'Placido Domingo',
    'Sarah Brightman', 'Enya', 'Josh Groban', 'Yanni', 'Hans Zimmer',
    'John Williams', 'Yo-Yo Ma', 'Lang Lang', 'Itzhak Perlman', 'Ravi Shankar'
  ];

  // Filter singers based on the search query
  const filteredSingers = singers.filter((singer) =>
    singer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="navbar">
      <div className="sections">
        <span>Music</span>
        <span>Podcast</span>
        <span>Live</span>
        <span>Radio</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Artist"
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
        />
        <FaSearch className="search-icon" />
      </div>
      {/* Display filtered singers */}
      {query && (
        <div className="dropdown">
          {filteredSingers.map((singer, index) => (
            <div key={index} className="dropdown-item">
              {singer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
