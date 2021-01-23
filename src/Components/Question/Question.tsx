import React from "react";
import { QuestionsInterface } from "../Questions/Questions";

interface QuestionProps {
  data: QuestionsInterface;
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  const options = [...data.incorrect_answers, data.correct_answer];
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: data.question }} />
      <p>{data.type}</p>

      {options.map((option) => (
        <li>{option}</li>
      ))}
    </div>
  );
};

export default Question;
