import React from "react";
import "./Name.css";

interface NameProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Name: React.FC<NameProps> = ({ name, setName, setScreen }) => {
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleNext = () => setScreen(4);
  return (
    <div className="name">
      <div>
        <h1>Name</h1>{" "}
        <input
          type="text"
          value={name}
          onChange={updateName}
          placeholder="John Doe ..."
        />
        <button onClick={handleNext}>Start</button>
      </div>
    </div>
  );
};

export default Name;
