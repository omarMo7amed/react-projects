import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextQuestion from "./NextQuestion.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";
import Restartingbutton from "./Restartingbutton.js";
import Timer from "./Timer.js";
import Footer from "./Footer.js";
import { useQuiz } from "../Context/QuizContext.js";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextQuestion />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
            <Restartingbutton />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
