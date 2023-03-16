import React from "react";
import LaunchCard from "../LaunchCard/LaunchCard";
import { useEffect } from "react";
import "./Launches.css";
import "./mobile.css";
import Loader from "../Loader/Loader";
//redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { setLaunches } from "../../redux/slice/index";

const Launches = ({ onClick }) => {
  //dispatach the reducer
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launchesReducer.launches);

  useEffect(() => {
    const obtainLaunchers = async () => {
      let response = await fetch(
        "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
      );

      let data = await response.json();
      dispatch(setLaunches(data.results));
    };
    obtainLaunchers();
  }, [dispatch]);

  return (
    <div className="launches-container">
      <h1>UPCOMING ROCKET LAUNCHES</h1>
      <div className="launches">
        {/*The card es renderized  if launches exist or if launches.length is greater than cero */}
        {launches && launches.length > 0 ? (
          <LaunchCard launches={launches} onClick={onClick} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Launches;
