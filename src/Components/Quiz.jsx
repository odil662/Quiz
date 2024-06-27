import React, { useState } from "react";
import "./Quiz.css";
import QuestionBlock from "./QuestionBlock";
import NewQuestionForm from "./NewQuestionForm";

const questions = [
  {
    title: "Столица Канады?",
    list: [
      { answer: "Оттава", term: true },
      { answer: "Ванкувер", term: false },
      { answer: "Мельбурн", term: false },
      { answer: "Чиконтен", term: false },
    ],
  },
  {
    title: "Сколько людей живет в РФ?",
    list: [
      { answer: "117 млн.", term: false },
      { answer: "162 млн.", term: false },
      { answer: "155 млн.", term: false },
      { answer: "144 млн.", term: true },
    ],
  },
  {
    title: "Расстояние от Москвы до Владивостока?",
    list: [
      { answer: "2000 км", term: false },
      { answer: "3500 км", term: false },
      { answer: "6000 км", term: false },
      { answer: "9000 км", term: true },
    ],
  },
  {
    title: "Как звали кота в мультфильме *Трое из Простоквашино*?",
    list: [
      { answer: "Юнгин", term: false },
      { answer: "Капитанкин", term: false },
      { answer: "Матроскин", term: true },
      { answer: "Адмиралкин", term: false },
    ],
  },
  {
    title: "Кто был официальным талисманом московской Олимпиады?",
    list: [
      { answer: "Слонёнок", term: false },
      { answer: "Котёнок", term: false },
      { answer: "Медвежёнок", term: true },
      { answer: "Утёнок", term: false },
    ],
  },
];

const Quiz = () => {
  const [newQuestions, setNewQuestion] = useState(questions);
  const changeQuestions = (el) => {
    setNewQuestion([...newQuestions, el]);
  };

  return (
    <div className="page">
      <QuestionBlock newQuestions={newQuestions} />
      <NewQuestionForm changeQuestions={changeQuestions} />
    </div>
  );
};

export default Quiz;
