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
  score: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  setScore: (arg0: any) => void;
}

const Questions: React.FC<QuestionsProps> = ({
  option,
  difficulty,
  score,
  setScreen,
  setScore,
}) => {
  const [questions, setQuestions] = useState<QuestionsInterface[]>([]);
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions(option, difficulty);
      setQuestions(data);
      console.log(data);
    };
    fetchQuestions();
  }, [difficulty, option]);
  const nextQuestion = () => setCurrent(current + 1);
  const updateScore = () => setScore(score + 10);
  const handleSubmit = () => setScreen(5);
  return (
    <div className="questions">
      score: {score}
      {questions.length ? (
        <Question
          data={questions[current]}
          updateScore={updateScore}
          key={questions[current].question}
        />
      ) : null}
      {current >= questions.length - 1 ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Questions;
