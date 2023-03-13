import "./App.css";
import LaunchInfo from "./components/LaunchInfo/LaunchInfo";
import Launches from "./components/Launches/Launches";
import { useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <h1>UPCOMING ROCKET LAUNCHES</h1>
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/:id" element={<LaunchInfo />} />
      </Routes>
      {/*!showLaunchInfo ? (
        <Launches onClick={onClick} />
      ) : (
        <LaunchInfo onClick={onClick} />
      )*/}
    </div>
  );
}

export default App;
