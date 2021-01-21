import React from "react";
import "./Difficulty.css";

const Difficulty = () => {
  return (
    <div className="difficulty">
      <h1>Select Difficulty</h1>
      <div>
        <div className="easy">Easy</div>
        <div className="medium">Medium</div>
        <div className="hard">Hard</div>
      </div>
    </div>
  );
};

export default Difficulty;
