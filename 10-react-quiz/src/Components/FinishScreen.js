import { useQuiz } from "../Context/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highScore } = useQuiz();

  const Percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (Percentage === 100) emoji = "🥇";
  if (Percentage >= 80 && Percentage < 100) emoji = "🎉";
  if (Percentage >= 50 && Percentage < 80) emoji = "🙃";
  if (Percentage >= 0 && Percentage < 50) emoji = "🤨";
  if (Percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPoints} (
        {Percentage}
        %)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}

export default FinishScreen;
