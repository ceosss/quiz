import React from "react";
import "./Options.css";

type OptionProps = {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const Options: React.FC<OptionProps> = ({ setOption, setScreen }) => {
  const updateOption = (value: string) => {
    setOption(value);
    setScreen(2);
  };
  return (
    <div className="options">
      <h1>Select Category</h1>
      <div>
        <div onClick={() => updateOption("film")} className="film">
          <p>Film</p>
        </div>
        <div onClick={() => updateOption("music")} className="music">
          <p>Music</p>
        </div>
        <div onClick={() => updateOption("tv")} className="tv">
          <p>Television</p>
        </div>
        <div onClick={() => updateOption("game")} className="game">
          <p>Games</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
