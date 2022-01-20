import React from "react";

const SunCard = ({ latitude, longitude, sunrise, sunset, error }) => {
  return (
    <div className="sun-display__list__item-border">
      <li className="sun-display__list__item">
        <h3>{`Lat: ${latitude}, Lng: ${longitude}`}</h3>
        {error || !(sunrise && sunset) ? (
          <div>There was an error loading data!</div>
        ) : (
          <>
            <div className="sun-display__list__item__stat">
              <span>Sunrise</span>
              <span>{sunrise}</span>
            </div>
            <div className="sun-display__list__item__stat">
              <span>Sunset</span>
              <span>{sunset}</span>
            </div>
          </>
        )}
      </li>
    </div>
  );
};
export default SunCard;
