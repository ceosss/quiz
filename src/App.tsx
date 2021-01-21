import React, { useState } from "react";
import Options from "./Components/Options/Options";
import Difficulty from "./Components/Difficulty/Difficulty";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState<number>(1);
  const [option, setOption] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const showScreen = () => {
    switch (screen) {
      case 1:
        return (
          <Options
            option={option}
            setOption={setOption}
            setScreen={setScreen}
          />
        );
      case 2:
        return <Difficulty />;
    }
  };
  return <div>{showScreen()}</div>;
};

export default App;
