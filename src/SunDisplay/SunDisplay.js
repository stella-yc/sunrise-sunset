import React, { useEffect, useState } from "react";
import SunCard from "./SunCard";
import "./sun-display.css";

// util function
const getSunTimes = async (locations) => {
  const results = await Promise.all(
    locations.map(async (l) => {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${l.longitude}&lng=${l.latitude}`
      );

      // not throwing error so that if the other
      // requests succeed they can still be displayed
      if (!response.ok) {
        return Promise.resolve({ ...l, error: true });
      }
      const json = await response.json();
      return {
        ...l,
        error: false,
        sunrise: json?.results?.sunrise,
        sunset: json?.results?.sunset,
      };
    })
  );

  return results;
};

const SunDisplay = ({ locations }) => {
  const [times, setTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // TODO: more error handling

  useEffect(() => {
    const fetchTimes = async () => {
      setIsLoading(true);
      const data = await getSunTimes(locations);
      setTimes(data);
      setIsLoading(false);
    };

    fetchTimes();
  }, [locations]);

  return (
    <div className="sun-display">
      {isLoading && <div>...loading...</div>}
      {!isLoading && (
        <ol className="sun-display__list">
          {times.map((t) => {
            return <SunCard key={`${t.latitude}-${t.longitude}`} {...t} />;
          })}
        </ol>
      )}
    </div>
  );
};

export default SunDisplay;
