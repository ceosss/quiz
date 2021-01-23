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
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions(option, difficulty);
      setQuestions(data);
      console.log(data);
    };
    fetchQuestions();
  }, []);
  const nextQuestion = () => setCurrent(current + 1);
  const updateScore = () => setScore(score + 10);
  return (
    <div>
      score: {score}
      {questions.length ? (
        <Question
          data={questions[current]}
          updateScore={updateScore}
          key={questions[current].question}
        />
      ) : null}
      {current >= questions.length - 1 ? (
        <button>Submit</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Questions;
