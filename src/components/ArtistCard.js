import React from 'react';
import michaelJacksonImage from '../assets/images.png'; // Import artist image
import verifiedIcon from '../assets/image.png'; // Import verified icon
import backgroundPattern from '../assets/dq.png'; // Import background image

const ArtistCard = () => {
  return (
    <div
      className="artist-card"
      style={{
        backgroundImage: `url(${backgroundPattern})`, // Apply background image dynamically
        backgroundSize: 'cover', // Ensure the background covers the entire card
        backgroundPosition: 'center', // Center the background image
      }}
    >
      {/* Background overlay */}
      <div className="background-overlay"></div>

      {/* Artist Information */}
      <div className="artist-info">
        <div className="verified-container">
          <img src={verifiedIcon} alt="Verified" className="verified-icon" />
          <span className="verified-text"></span>
        </div>
        <h2>Michael Jackson</h2>
        <p>27,852,501 monthly listeners</p>
      </div>

      {/* Michael Jackson Image */}
      <img
        src={michaelJacksonImage}
        alt="Michael Jackson"
        className="artist-image"
      />
    </div>
  );
};

export default ArtistCard;
