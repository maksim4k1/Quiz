import { getMyQuiz } from "../../../api/myQuizzesRequests";
import { LOAD_MY_QUIZ_FAILING, LOAD_MY_QUIZ_LOADING, LOAD_MY_QUIZ_SUCCESS } from "../../types"

export function loadMyQuizAction(id, username){
  return async (dispatch) => {
    dispatch({type: LOAD_MY_QUIZ_LOADING});

    const response = await getMyQuiz({id, username});
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      dispatch({type: LOAD_MY_QUIZ_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_MY_QUIZ_FAILING, payload: data});
    }
  }
}