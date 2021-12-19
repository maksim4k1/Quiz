import { logIn } from "../../../api/authRequests";
import { getToken, setProfileData } from "../../../storage/localStorage";
import { LOG_IN_FAILING, LOG_IN_LOADING, LOG_IN_SUCCESS } from "../../types";

export function logInAction(){
  return async (dispatch) => {
    dispatch({type: LOG_IN_LOADING});

    const token = getToken();
    const response = await logIn(token);
    const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

    if(response.ok){
      setProfileData(token, data);
      dispatch({type: LOG_IN_SUCCESS, payload: data});
    } else{
      dispatch({type: LOG_IN_FAILING});
    }
  }
}