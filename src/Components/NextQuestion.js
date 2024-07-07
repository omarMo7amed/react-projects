import { useQuiz } from "../Context/QuizContext";

function NextQustion() {
  const { dispatch, answer, numQuestions, index } = useQuiz();

  if (answer === null) return;

  if (numQuestions > index + 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (numQuestions === index + 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextQustion;
