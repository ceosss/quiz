import React from "react";
import "./Options.css";

const Options = () => {
  return (
    <div className="options">
      <h1>Select Category</h1>
      <div>
        <div className="film">Film</div>
        <div className="music">Music</div>
        <div className="tv">Television</div>
        <div className="games">Games</div>
      </div>
    </div>
  );
};

export default Options;
