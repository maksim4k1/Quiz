import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(formData, navigate){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});
    try{
      setTimeout(() => {
        if(formData.username && formData.password){
          dispatch({type: SIGN_IN_SUCCESS});
          navigate("/");
        } else{
          dispatch({type: SIGN_IN_FAILING, payload: "Заполните все поля"});
        }
      }, 500);
    } catch{
      dispatch({type: SIGN_IN_FAILING, payload: "Error"});
    }
  }
}