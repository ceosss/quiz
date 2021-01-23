import React, { useState, useEffect } from "react";
import getQuestions from "../../Helper/fetch";
import Question from "../Question/Question";

enum QuestionType {
  multiple,
  boolean,
}

export interface QuestionsInterface {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: QuestionType;
}

interface QuestionsProps {
  option: string;
  difficulty: string;
}

const Questions: React.FC<QuestionsProps> = ({ option, difficulty }) => {
  const [questions, setQuestions] = useState<QuestionsInterface[]>([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions(option, difficulty);
      setQuestions(data);
      console.log(data);
    };
    fetchQuestions();
  }, []);
  return (
    <div>
      {questions &&
        questions.map((question) => (
          <Question data={question} key={question.question} />
        ))}
    </div>
  );
};

export default Questions;
