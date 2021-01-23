import React from "react";
import getQuestions from "../../Helper/fetch";

// enum QuestionType {
//   multiple,
//   boolean,
// }

// interface QuestionsProps {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: QuestionType;
// }

interface QuestionsProps {
  option: string;
  difficulty: string;
}

const Questions: React.FC<QuestionsProps> = ({ option, difficulty }) => {
  const fetchQuestions = async () => {
    const data = await getQuestions(option, difficulty);
    console.log(data);
  };
  return (
    <div>
      <p onClick={fetchQuestions}>Hey</p>
    </div>
  );
};

export default Questions;
