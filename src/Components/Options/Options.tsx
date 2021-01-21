import React from "react";
import "./Options.css";

type OptionProps = {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const Options: React.FC<OptionProps> = ({ option, setOption, setScreen }) => {
  const updateOption = (value: string) => {
    setOption(value);
    setScreen(2);
  };
  return (
    <div className="options">
      <h1>Select Category</h1>
      <div>
        <div onClick={() => updateOption("film")} className="film">
          Film
        </div>
        <div onClick={() => updateOption("music")} className="music">
          Music
        </div>
        <div onClick={() => updateOption("tv")} className="tv">
          Television
        </div>
        <div onClick={() => updateOption("games")} className="games">
          Games
        </div>
      </div>
    </div>
  );
};

export default Options;
