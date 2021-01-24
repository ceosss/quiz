import React from "react";

interface FinalProps {
  score: number;
  name: string;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Final: React.FC<FinalProps> = ({ score, name, setScreen }) => {
  const updateScreen = () => setScreen(1);
  return (
    <div>
      Hey {name}, You scored {score}/100
      <button onClick={updateScreen}>Play Again</button>
    </div>
  );
};

export default Final;
