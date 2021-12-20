import { getData } from "../../../api/requests";
import { LOAD_RATING_FAILING, LOAD_RATING_LOADING, LOAD_RATING_SUCCESS } from "../../types"

export function loadRatingAction(){
  return async (dispatch) => {
    dispatch({type: LOAD_RATING_LOADING});

    const response = await getData("/rating");
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      dispatch({type: LOAD_RATING_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_RATING_FAILING, payload: data});
    }
  }
}