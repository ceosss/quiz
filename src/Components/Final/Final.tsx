import React, { useEffect } from "react";
import { saveScore } from "../../Helper/saveScore";
import { message } from "antd";

interface FinalProps {
  score: number;
  name: string;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Final: React.FC<FinalProps> = ({ score, name, setScreen }) => {
  const updateScreen = () => setScreen(1);
  const data = { score, name };
  useEffect(() => {
    const save = async () => {
      saveScore(data)
        .then(() => message.success("Score Saved Successfully"))
        .catch((error) => message.error(error));
    };
    save();
  }, []);
  return (
    <div>
      Hey {name}, You scored {score}/100
      <button onClick={updateScreen}>Play Again</button>
    </div>
  );
};

export default Final;
