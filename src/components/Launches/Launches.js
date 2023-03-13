import React from "react";
import Launch from "../Launch/Launch";
import { useState } from "react";
import { useEffect } from "react";
import mock from "../../mocks/mock.json";
import "./Launches.css";
import "./mobile.css";

const Launches = ({ onClick }) => {
  const [launches, setLaunchers] = useState(mock.results);

  /* useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
      );

      let data = await response.json();
      setLaunchers(data.results);
      console.log(data.results);
    };
    obtainLaunchers();
  }, []);*/

  console.log(launches);
  return (
    <div className="launches-container">
      <h1>UPCOMING ROCKET LAUNCHES</h1>
      <div className="launches">
        <Launch launches={launches} onClick={onClick} />
      </div>
    </div>
  );
};

export default Launches;
