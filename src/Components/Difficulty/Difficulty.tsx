import React from "react";
import "./Difficulty.css";

type DifficultyProps = {
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
};

const Difficulty: React.FC<DifficultyProps> = ({
  setDifficulty,
  setScreen,
}) => {
  const updateDifficulty = (value: string) => {
    setDifficulty(value);
    setScreen(3);
  };
  return (
    <div className="difficulty">
      <h1>Select Difficulty</h1>
      <div>
        <div onClick={() => updateDifficulty("easy")} className="easy">
          Easy
        </div>
        <div onClick={() => updateDifficulty("medium")} className="medium">
          Medium
        </div>
        <div onClick={() => updateDifficulty("hard")} className="hard">
          Hard
        </div>
      </div>
    </div>
  );
};

export default Difficulty;
