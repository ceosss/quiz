import React from "react";

interface FinalProps {
  score: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Final: React.FC<FinalProps> = ({ score, setScreen }) => {
  const updateScreen = () => setScreen(1);
  return (
    <div>
      Hey, You scored {score}/100
      <button onClick={updateScreen}>Play Again</button>
    </div>
  );
};

export default Final;
