import { signIn } from "../../../api/authRequests";
import { setToken } from "../../../storage/localStorage";
import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});

    if(!formData.username || !formData.password){
      dispatch({type: SIGN_IN_FAILING, payload: "Заполните все поля"});
    } else{
      const response = await signIn(formData);
      const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

      if(response.ok){
        setToken(data.token);
        redirect();
        dispatch({type: SIGN_IN_SUCCESS, payload: data.data});
      } else{
        dispatch({type: SIGN_IN_FAILING, payload: data});
      }
    }
  }
}