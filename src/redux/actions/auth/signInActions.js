import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});
    try{
      setTimeout(() => {
        if(formData.username && formData.password){
          redirect();
          dispatch({type: SIGN_IN_SUCCESS});
        } else{
          dispatch({type: SIGN_IN_FAILING, payload: "Заполните все поля"});
        }
      }, 500);
    } catch{
      dispatch({type: SIGN_IN_FAILING, payload: "Error"});
    }
  }
}