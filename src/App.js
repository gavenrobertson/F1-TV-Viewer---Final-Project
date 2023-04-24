import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useParams,
  Outlet,
} from "react-router-dom";
import DriverList from "./pages/DriverList";
import DriverSeasons from "./pages/DriverSeasonList";
import "./App.css";
import SeasonRaces from "./pages/DriverSeasonRaceList";
import RaceLaps from "./pages/Search";
import Banner from "./components/banner";
import Search from "./pages/Search";
import Post from "./pages/Post";
import DriverSeasonRace from "./pages/DriverSeasonRaceList";
import "./App.css";
//import playSound from "./Sound";

function App() {
  //const [theRoundNum, setTheRoundNum] = useState({})
  const [theSeason, setTheSeason] = useState();

  return (
    <div className="backdrop">
      <Banner />
      <Outlet />
      {/* {playSound(null, null, null)} */}
      <Routes>
        <Route path="" element={<DriverList />} />
        <Route path=":driverName" element={<DriverSeasons />} />
        <Route
          path=":driverName/:season"
          element={<SeasonRaces setTheSeason={setTheSeason} />}
        />
        <Route
          path=":driverName/:season/:raceName"
          element={<RaceLaps theSeason={theSeason} />}
        />
      </Routes>
    </div>
  );
}

export default App;
