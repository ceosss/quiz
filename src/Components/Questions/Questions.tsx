import React, { useState, useEffect } from "react";
import getQuestions from "../../Helper/fetch";

enum QuestionType {
  multiple,
  boolean,
}

interface Questions {
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
  const [questions, setQuestions] = useState<Questions[]>([]);
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
      <p>Hey</p>
    </div>
  );
};

export default Questions;
