import React, { useState } from "react";
import Options from "./Components/Options/Options";
import Difficulty from "./Components/Difficulty/Difficulty";
import Questions from "./Components/Questions/Questions";
import Final from "./Components/Final/Final";
import Name from "./Components/Name/Name";
import { ReactComponent as Logo } from "./Assets/quiz.svg";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState<number>(1);
  const [option, setOption] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [name, setName] = useState<string>("");
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
        return <Name name={name} setName={setName} setScreen={setScreen} />;
      case 4:
        return (
          <Questions
            option={option}
            difficulty={difficulty}
            setScreen={setScreen}
            score={score}
            setScore={setScore}
            name={name}
          />
        );
      case 5:
        return <Final score={score} name={name} setScreen={setScreen} />;
    }
  };
  return (
    <div className="app">
      {showScreen()}
      <Logo className="logo" />
    </div>
  );
};

export default App;
