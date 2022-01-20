import React from "react";

const LocationProgress = ({ locations }) => {
  return (
    <>
      <h2>
        {!locations.length
          ? "Please enter 5 locations"
          : `You have entered ${locations.length} out of 5 locations`}
      </h2>
      <ol>
        {locations.map(({ latitude, longitude }) => (
          <li
            key={`${latitude}-${longitude}`}
          >{`Lat: ${latitude}, Lng: ${longitude}`}</li>
        ))}
      </ol>
    </>
  );
};

export default LocationProgress;
