import { getData } from "../../../api/requests";
import { LOAD_USER_PROFILE_FAILING, LOAD_USER_PROFILE_LOADING, LOAD_USER_PROFILE_SUCCESS } from "../../types"

export function loadUserProfileAction(username){
  return async (dispatch) => {
    dispatch({type: LOAD_USER_PROFILE_LOADING});

    const response = await getData(`/profile/${username}`);
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера.";

    if(response.ok){
      dispatch({type: LOAD_USER_PROFILE_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_USER_PROFILE_FAILING, payload: data});
    }
  }
}