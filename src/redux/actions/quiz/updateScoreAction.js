import { updateScore } from "../../../api/editProfileRequests"
import { UPDATE_SCORE } from "../../types"

export function updateScoreAction(result){
  return async (dispatch) => {
    const response = await updateScore(result);
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      dispatch({type: UPDATE_SCORE, payload: data});
    }
  }
}