function NextQustion({ dispatch, answer, numQuestions, index }) {
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
