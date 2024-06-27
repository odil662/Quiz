import React, { useState } from "react";

const NewQuestionForm = ({ changeQuestions }) => {
  const [question, setQuestion] = useState({
    title: "",
    list: [
      { answer: "", term: false },
      { answer: "", term: false },
      { answer: "", term: false },
      { answer: "", term: false },
    ],
  });

  const changeQuestion = (event) => {
    if (event.target.id === "title") {
      setQuestion({ ...question, title: event.target.value });
    } else {
      setQuestion({
        ...question,
        list: question.list.map((el, i) => {
          if (i === Number(event.target.id)) {
            return { ...el, answer: event.target.value };
          }
          return el;
        }),
      });
    }
  };

  const changeRadioState = (event) => {
    setQuestion({
      ...question,
      list: question.list.map((el, i) => {
        if (i === Number(event.target.id)) {
          return { ...el, term: event.target.checked };
        }

        return { ...el, term: false };
      }),
    });
  };
  const sendForm = () => {
    if (question.title) {
      changeQuestions(question);
      setQuestion({
        title: "",
        list: [
          { answer: "", term: false },
          { answer: "", term: false },
          { answer: "", term: false },
          { answer: "", term: false },
        ],
      });
    }
  };

  return (
    <div className="form">
      <input
        id="title"
        type="text"
        placeholder="Введите ваш вопрос"
        value={question.title}
        onChange={(event) => changeQuestion(event)}
      />
      {question.list.map((el, i) => (
        <div key={i} className="inputBox">
          <input
            id={i}
            type="text"
            placeholder="Введите вариант ответа"
            value={question.list[i].answer}
            onChange={(event) => changeQuestion(event)}
          />
          <input
            id={i}
            name="radioButton"
            type="radio"
            onChange={(event) => changeRadioState(event)}
          />
        </div>
      ))}
      <button className="addForm" onClick={sendForm}>
        Добавить
      </button>
    </div>
  );
};

export default NewQuestionForm;
