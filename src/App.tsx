import React, { useState } from "react";
import Options from "./Components/Options/Options";
import Difficulty from "./Components/Difficulty/Difficulty";
import "./App.css";
import Questions from "./Components/Questions/Questions";
import Final from "./Components/Final/Final";

const App = () => {
  const [screen, setScreen] = useState<number>(1);
  const [option, setOption] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const showScreen = () => {
    switch (screen) {
      case 1:
        return <Options setOption={setOption} setScreen={setScreen} />;
      case 2:
        return (
          <Difficulty setDifficulty={setDifficulty} setScreen={setScreen} />
        );
      case 3:
        return (
          <Questions
            option={option}
            difficulty={difficulty}
            setScreen={setScreen}
            score={score}
            setScore={setScore}
          />
        );
      case 4:
        return <Final score={score} setScreen={setScreen} />;
    }
  };
  return <div>{showScreen()}</div>;
};

export default App;
