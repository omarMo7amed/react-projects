import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { QuizProvider } from "./contexts/QuizContext";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
