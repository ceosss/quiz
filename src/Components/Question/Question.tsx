import React from "react";
import { QuestionsInterface } from "../Questions/Questions";

interface QuestionProps {
  data: QuestionsInterface;
  updateScore: () => void;
}

const Question: React.FC<QuestionProps> = ({ data, updateScore }) => {
  const options = [...data.incorrect_answers, data.correct_answer];
  const checkAnswer = (option: string) => {
    if (option === data.correct_answer) return updateScore();
  };
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: data.question }} />
      <p>{data.type}</p>

      {options.map((option) => (
        <button onClick={() => checkAnswer(option)}>{option}</button>
      ))}
    </div>
  );
};

export default Question;
