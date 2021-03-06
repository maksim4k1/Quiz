import { logIn } from "../../../api/authRequests";
import { getToken, setToken } from "../../../storage/localStorage";
import { LOG_IN_FAILING, LOG_IN_LOADING, LOG_IN_SUCCESS } from "../../types";

export function logInAction(){
  return async (dispatch) => {
    dispatch({type: LOG_IN_LOADING});

    const token = getToken();
    if(token){
      const response = await logIn(token);
      const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

      if(response.ok){
        setToken(token);
        dispatch({type: LOG_IN_SUCCESS, payload: data});
      } else{
        dispatch({type: LOG_IN_FAILING});
      }
    } else{
      dispatch({type: LOG_IN_FAILING});
    }
  }
}