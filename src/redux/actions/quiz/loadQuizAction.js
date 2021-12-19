import { getData } from "../../../api/requests";
import { LOAD_QUIZ_FAILING, LOAD_QUIZ_LOADING, LOAD_QUIZ_SUCCESS } from "../../types"

export function loadQuizAction(id){
  return async (dispatch) => {
    dispatch({type: LOAD_QUIZ_LOADING});

    const response = await getData(`/quiz/${id}`);
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      dispatch({type: LOAD_QUIZ_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_QUIZ_FAILING, payload: data});
    }
  }
}