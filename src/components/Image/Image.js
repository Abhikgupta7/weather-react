import React from "react";
import "./Image.css";

const Image = ({ climate }) => {
  let imageUrl = require(`../../assests/${climate}.jpg`);
  return (
    <div className="image-container">
      <img src={imageUrl} alt="Weather" className="weather-image" />
    </div>
  );
};

export default Image;
