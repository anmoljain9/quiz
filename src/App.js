import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addScore } from "./slices/scoresSlice";

const App = () => {
  const questions = useSelector((state) => state.questions);
  const scores = useSelector((state) => state.scores.runs);

  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (answer.length === questions.length) {
      handleScore();
      handleQueIncrement();
    }
  }, [answer]);

  const handleQueIncrement = () => {
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    if (currentQuestion === questions.length) {
      setAnswer([]);
    }
  };

  const handleAnswer = (ans) => {
    setAnswer((prevAns) => [...prevAns, ans]);
    handleQueIncrement();
  };

  const handleScore = () => {
    const yesAnswers = answer.filter((q) => q === "yes").length;
    const score = (100 * yesAnswers) / questions.length;
    dispatch(addScore(score));
  };

  const averageScore =
    scores.length > 0
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
      : 0;

  return (
    <div className="main__wrap">
      <div>
        <h1>Quiz</h1>
        {currentQuestion < questions.length ? (
          <div>
            <p>{questions[currentQuestion].question}</p>
            <button onClick={() => handleAnswer("yes")}>Yes</button>
            <button onClick={() => handleAnswer("no")}>No</button>
          </div>
        ) : (
          <div>
            <p>Quiz completed!</p>
            <p>Your score: {scores[scores.length - 1]}</p>
            <p>Average score: {averageScore}</p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
              }}
            >
              Re-Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
