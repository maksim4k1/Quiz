import { getMyQuizzes } from "../../../api/myQuizzesRequests";
import { LOAD_MY_QUIZZES_FAILING, LOAD_MY_QUIZZES_LOADING, LOAD_MY_QUIZZES_SUCCESS } from "../../types"

export function loadMyQuizzesAction(myQuizzes){
  return async (dispatch) => {
    dispatch({type: LOAD_MY_QUIZZES_LOADING});

    if(!myQuizzes.length){
      dispatch({type: LOAD_MY_QUIZZES_FAILING, payload: "Список ваших викторин пуст"});
    } else{
      const response = await getMyQuizzes(myQuizzes);
      const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

      if(response.ok){
        dispatch({type: LOAD_MY_QUIZZES_SUCCESS, payload: data});
      } else{
        dispatch({type: LOAD_MY_QUIZZES_FAILING, payload: data});
      }
    }
  }
}