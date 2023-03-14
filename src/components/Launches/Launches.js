import React from "react";
import LaunchCard from "../LaunchCard/LaunchCard";
import { useState } from "react";
import { useEffect } from "react";
import "./Launches.css";
import "./mobile.css";
import Loader from "../Loader/Loader";

const Launches = ({ onClick }) => {
  const [launches, setLaunchers] = useState(null);

  useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
      );

      let data = await response.json();
      setLaunchers(data.results);
    };
    obtainLaunchers();
  }, []);

  return (
    <div className="launches-container">
      <h1>UPCOMING ROCKET LAUNCHES</h1>
      <div className="launches">
        {launches ? (
          <LaunchCard launches={launches} onClick={onClick} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Launches;
