import React, { useState } from "react";
import { QuestionsInterface } from "../Questions/Questions";

interface QuestionProps {
  data: QuestionsInterface;
  updateScore: () => void;
}

const Question: React.FC<QuestionProps> = ({ data, updateScore }) => {
  const [answered, setAnswered] = useState<boolean>(false);
  const options = [...data.incorrect_answers, data.correct_answer];
  const checkAnswer = (option: string) => {
    setAnswered(true);
    if (option === data.correct_answer) return updateScore();
  };
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: data.question }} />
      <p>{data.type}</p>

      {options.map((option) => (
        <button
          onClick={() => checkAnswer(option)}
          disabled={answered === true}
          dangerouslySetInnerHTML={{ __html: option }}
          key={option}
        ></button>
      ))}
    </div>
  );
};

export default Question;
