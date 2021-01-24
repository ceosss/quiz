import React from "react";

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
      <p>Hey, Could you please share your name.</p>
      <input
        type="text"
        value={name}
        onChange={updateName}
        placeholder="John Doe"
      />
      <button onClick={handleNext}>Start</button>
    </div>
  );
};

export default Name;
