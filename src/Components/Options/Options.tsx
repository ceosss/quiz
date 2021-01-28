import React, { useState } from "react";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

import "./Options.css";

type OptionProps = {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const Options: React.FC<OptionProps> = ({ setOption, setScreen }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const updateOption = (value: string) => {
    setOption(value);
    setScreen(2);
  };
  return (
    <div className="options">
      <h1>Select a Category</h1>
      <div>
        <div onClick={() => updateOption("film")} className="film">
          <p>Film</p>
        </div>
        <div onClick={() => updateOption("music")} className="music">
          <p>Music</p>
        </div>
        <div onClick={() => updateOption("tv")} className="tv">
          <p>TV Series</p>
        </div>
        <div onClick={() => updateOption("game")} className="game">
          <p>Games</p>
        </div>
      </div>
      <button onClick={onOpenModal} className="leaderboard-btn">
        Show Leaderboard
      </button>
      <LeaderBoard open={open} onCloseModal={onCloseModal} />
    </div>
  );
};

export default Options;
