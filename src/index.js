import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Components/Quiz";
import { QuizProvider } from "./Contexts/quiz";


ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);