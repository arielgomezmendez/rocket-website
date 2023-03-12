import React from "react";
import Launch from "../Launch/Launch";
import { useState } from "react";
import { useEffect } from "react";

const Launchers = () => {
  const [launchers, setLaunchers] = useState([]);

  useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
      );

      let data = await response.json();
      setLaunchers(data.results);
      console.log(data.results);
    };
    obtainLaunchers();
  }, []);

  return (
    <div>
      {launchers.map((l) => (
        <Launch key={l.id} data={l} launchers={launchers} />
      ))}
    </div>
  );
};

export default Launchers;

{
  /*
{data.results.map((l) => (
        <Launcher key={l.id} data={l} />
      ))}
*/
}
