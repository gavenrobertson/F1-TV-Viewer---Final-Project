import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import "../assets/styles/DriverList.css";
import icon from "../assets/formula.png";
import car from "../assets/f2004.jpeg";

const DriverList = () => {
  const [index, setIndex] = useState(15);
  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);

  function showMoreDrivers() {
    setDrivers(allDrivers.slice(index, index + 15));
    setIndex(index + 15);
  }

  function showLessDrivers() {
    setDrivers(allDrivers.slice(index - 30, index - 15));
    setIndex(index - 15);
  }

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await axios.get(
        "http://ergast.com/api/f1/drivers.json?limit=1000"
      );
      const fullData = response.data.MRData.DriverTable.Drivers;
      setAllDrivers(fullData);
      setDrivers(fullData.slice(0, 15));
    };

    fetchDrivers();
  }, []);

  return (
    <div>
      <h1 className="main-heading">Driver List</h1>
      <div className="links-container">
        <ul>
          {drivers.map((driver) => (
            <li key={driver.driverId}>
              {" "}
              <Link to={driver.driverId}>
                {" "}
                {driver.givenName} {driver.familyName}{" "}
              </Link>{" "}
              <span>
                <img className="racecar-icon" src={icon} />
              </span>
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button onClick={showLessDrivers}>&lt;</button>
          <button onClick={showMoreDrivers}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default DriverList;
