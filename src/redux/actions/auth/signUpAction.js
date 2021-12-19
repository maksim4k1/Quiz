import { signUp } from "../../../api/authRequests";
import { setProfileData } from "../../../storage/localStorage";
import { SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "../../types";

export function signUpAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_UP_LOADING});

    if(!formData.name || !formData.username || !formData.password || !formData.confirm_password){
      dispatch({type: SIGN_UP_FAILING, payload: "Заполните все поля"});
    } else if(formData.password !== formData.confirm_password){
      dispatch({type: SIGN_UP_FAILING, payload: "Пароли не совпадают"});
    } else{
      const response = await signUp(formData);
      const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

      if(response.ok){
        setProfileData(data.token, data.data);
        redirect();
        dispatch({type: SIGN_UP_SUCCESS, payload: data.data});
      } else{
        dispatch({type: SIGN_UP_FAILING, payload: data});
      }
    }
  }
}