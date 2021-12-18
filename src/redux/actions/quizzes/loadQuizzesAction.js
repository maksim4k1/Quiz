import { getData } from "../../../api/requests";
import { LOAD_QUIZZES_FAILING, LOAD_QUIZZES_LOADING, LOAD_QUIZZES_SUCCESS } from "../../types"

export function loadQuizzesAction(id){
  return async (dispatch) => {
    dispatch({type: LOAD_QUIZZES_LOADING});

    const response = await getData(`/category/${id}`);
    const data = await response.json();

    if(response.ok){
      dispatch({type: LOAD_QUIZZES_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_QUIZZES_FAILING, payload: data});
    }
  }
}