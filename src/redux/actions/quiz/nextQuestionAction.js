import { NEXT_QUESTION, SET_BACKGROUND_COLOR } from "../../types";
import { disableButtonsAction, enableButtonsAction } from "./disableButtonsAction";
import { rightAnswerAction } from "./rightAnswerAction";
import { setSelectedAnswersAction } from "./setSelectedAnswersAction";

export function nextQuestionAction(quiz, question, buttonId, navigate){
  return (dispatch) => {
    const answer = quiz.questions[question].answers[buttonId];

    if(answer.isTrue){
      dispatch({type: SET_BACKGROUND_COLOR, payload: {button: buttonId, fill: "var(--color-green)"}});
    } else{
      dispatch({type: SET_BACKGROUND_COLOR, payload: {button: buttonId, fill: "var(--color-red)"}});
    }

    dispatch(disableButtonsAction());

    setTimeout(() => {
      dispatch(enableButtonsAction());
      dispatch(setSelectedAnswersAction(quiz, question, buttonId));
      dispatch({type: NEXT_QUESTION});
      dispatch({type: SET_BACKGROUND_COLOR, payload: {button: buttonId, fill: "var(--color-darkblue)"}});
      
      if(answer.isTrue){
        dispatch(rightAnswerAction());
      }
      if(quiz.questions.length <= question + 1){
        navigate("/game/result/");
      }
    }, 1000);
  }
}