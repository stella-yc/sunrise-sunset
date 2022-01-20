import React, { useState } from "react";
import LocationCard from "./LocationCard/LocationCard";
import "./App.css";
import SunDisplay from "./SunDisplay/SunDisplay";
import LocationProgress from "./LocationProgress/LocationProgress";

const testData = [
  {
    latitude: -90,
    longitude: 1,
  },
  {
    latitude: 6,
    longitude: 29.242,
  },
  {
    latitude: 68.433,
    longitude: 100.244,
  },
  {
    latitude: 43.435,
    longitude: -130.246,
  },
  {
    latitude: 13.437,
    longitude: -103.248,
  },
];

function App() {
  const useTestData = false; // in reality would flag with env variable maybe
  const [locations, setLocations] = useState(useTestData ? testData : []);
  const [dupError, showDuperror] = useState(false);
  const areLocationsComplete = locations.length === 5;

  const addLocation = (newLocation) => {
    setLocations((prevState) => {
      // avoid adding the same location twice
      if (
        prevState.find(
          (l) =>
            l.latitude === newLocation.latitude &&
            l.longitude === newLocation.longitude
        )
      ) {
        showDuperror(true);
        return prevState;
      }
      showDuperror(false);
      return [...prevState, newLocation];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunrise and Sunset times</h1>
      </header>
      <main>
        <div role="alert"></div>
        {!areLocationsComplete && <LocationProgress locations={locations} />}
        {areLocationsComplete ? (
          <SunDisplay locations={locations} />
        ) : (
          <LocationCard
            addLocation={addLocation}
            errorMessage={
              dupError
                ? "That location has already been entered! Please try adjusting the lat/lng values"
                : ""
            }
          />
        )}
      </main>
    </div>
  );
}

export default App;
