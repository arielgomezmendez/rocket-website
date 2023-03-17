import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
};

export default Loader;
