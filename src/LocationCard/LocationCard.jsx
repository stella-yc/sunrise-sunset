import React, { useState } from "react";
import "./location-card.css";

// Notes: In reality I would probably use
// a form library with a validation library such
// as formik or react-hook-form
// just tried to handle it on my own in this case
const LocationCard = ({ addLocation, errorMessage }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addLocation({ latitude, longitude });
    setLongitude("");
    setLatitude("");
  };

  return (
    <form className="location-card" onSubmit={handleSubmit}>
      <h2>Add a new location</h2>
      <label for="lat" className="location-card__label">
        <span>Latitude</span>
        <input
          type="number"
          id="lat"
          name="lat"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          step="any"
          min={-90}
          max={90}
          required
        />
      </label>
      <label for="lng" className="location-card__label">
        <span>Longitude</span>
        <input
          type="number"
          id="lng"
          name="lng"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          step="any"
          min={-180}
          max={180}
          required
        />
      </label>
      <button className="location-card__submit">Next</button>
      <div>{errorMessage}</div>
    </form>
  );
};

export default LocationCard;
