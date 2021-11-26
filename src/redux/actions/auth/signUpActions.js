import { SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "../../types";

export function signUpAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_UP_LOADING});
    try{
      setTimeout(() => {
        if(!formData.name || !formData.username || !formData.password || !formData.confirm_password){
          dispatch({type: SIGN_UP_FAILING, payload: "Заполните все поля"});
        } else if(formData.password !== formData.confirm_password){
          dispatch({type: SIGN_UP_FAILING, payload: "Пароли не совпадают"});
        } else{
          redirect();
          dispatch({type: SIGN_UP_SUCCESS});
        }
      }, 500);
    } catch{
      dispatch({type: SIGN_UP_FAILING, payload: "Error"});
    }
  }
}