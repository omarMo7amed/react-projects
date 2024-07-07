import { useQuiz } from "../Context/QuizContext";

function Restartingbutton() {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart Quiz
    </button>
  );
}

export default Restartingbutton;
