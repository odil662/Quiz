import React, { useState } from "react";

const QuestionBlock = ({ newQuestions }) => {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const changeIndex = (answer) => {
    setIndex(index + 1);

    if (answer.term) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const repeatQuiz = () => {
    setIndex(0);
    setCorrect(0);
    setIncorrect(0);
  };

  return (
    <>
      {index !== newQuestions.length ? (
        <div className="quiz">
          {
            <div className="questionsNumber">
              {newQuestions.map((el, i) => (
                <span
                  key={i}
                  className={`number ${i === index ? "active" : ""}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          }
          {
            <div className="display">
              <h4 className="questionTitle">{newQuestions[index].title}</h4>
              <div className="answersList">
                {newQuestions[index].list.map((el, i) => (
                  <button
                    key={i}
                    className="answer"
                    onClick={() => changeIndex(el)}
                  >
                    {`${i + 1}. ${el.answer}`}
                  </button>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="result">
          <h4>Результат:</h4>
          <p>{`Правильные ответы - ${correct}.`} </p>
          <p>{`Неправильные ответы - ${incorrect}.`}</p>
          <button className="repeat" onClick={repeatQuiz}>
            Повторить
          </button>
        </div>
      )}
    </>
  );
};

export default QuestionBlock;
