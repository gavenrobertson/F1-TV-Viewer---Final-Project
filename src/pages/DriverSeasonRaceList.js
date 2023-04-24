import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SeasonRaces = ({ setTheSeason }) => {
  const [races, setRaces] = useState([]);
  const season = useParams();
  console.log({ season });
  setTheSeason(season.season);

  useEffect(() => {
    const fetchRaces = async () => {
      const response = await axios.get(
        `https://ergast.com/api/f1/${season.season}.json`
      );
      setRaces(response.data.MRData.RaceTable.Races);
    };

    fetchRaces();
  }, [season]);

  return (
    <div>
      <h1 className="main-heading">{season.season} Races</h1>
      <div className="links-container">
        <ul>
          {races.map((race) => (
            <p key={race.round}>
              {" "}
              <Link to={race.round}>
                {" "}
                {race.raceName} - {race.Circuit.circuitName}{" "}
              </Link>{" "}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeasonRaces;
