import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DriverSeasons = () => {
  const [seasons, setSeasons] = useState([]);
  const driverId = useParams();
  //console logging out the object useParams returns
  console.log({ driverId });

  useEffect(() => {
    const fetchSeasons = async () => {
      const response = await axios.get(
        `https://ergast.com/api/f1/drivers/${driverId.driverName}/seasons.json`
      );
      setSeasons(response.data.MRData.SeasonTable.Seasons);
    };

    fetchSeasons();
  }, [driverId]);

  return (
    <div>
      <h1 className="main-heading"> Seasons for {driverId.driverName}</h1>
      <div className="links-container">
        <ul>
          {seasons.map((season) => (
            <li key={season.season}>
              {" "}
              <Link to={season.season}> {season.season} </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverSeasons;
