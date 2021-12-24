import { deleteMyQuiz } from "../../../api/myQuizzesRequests";
import { DELETE_QUIZ_FAILING, DELETE_QUIZ_LOADING, DELETE_QUIZ_SUCCESS } from "../../types"

export function deleteMyQuizAction(id, redirect){
  return async (dispatch) => {
    dispatch({type: DELETE_QUIZ_LOADING});

    const response = await deleteMyQuiz(id);
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      redirect();
      dispatch({type: DELETE_QUIZ_SUCCESS});
    } else{
      dispatch({type: DELETE_QUIZ_FAILING, payload: data});
    }
  }
}