import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RaceLaps = ({ theSeason }) => {
  const [lap, setLap] = useState(null);
  const [currentLap, setCurrentLap] = useState(1);
  const round = useParams();
  console.log(round);

  useEffect(() => {
    const fetchLap = async () => {
      //Would need to set year and race number as variables
      const response = await axios.get(
        `http://ergast.com/api/f1/${theSeason}/${round.raceName}/laps/${currentLap}.json`
      );
      setLap(response.data.MRData.RaceTable.Races[0].Laps[0]);
    };

    fetchLap();
  }, [currentLap]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLap((currentLap) => currentLap + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="main-heading">
        Laps of Race {round.raceName}, {theSeason}
      </h1>
      {lap && (
        <div className="links-container">
          <h2>Lap {lap.number}</h2>
          {lap.Timings.map((timing, index) => (
            <div key={index}>
              <p className="lap-time-strings">
                {timing.driverId} {timing.time}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RaceLaps;
