import { signIn } from "../../../api/requests";
import { setProfileData } from "../../../storage/localStorage";
import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});

    if(!formData.username || !formData.password){
      dispatch({type: SIGN_IN_FAILING, payload: "Заполните все поля"});
    } else{
      const response = await signIn(formData);
      const data = await response.json();

      if(response.ok){
        setProfileData(data.token, data.data);
        redirect();
        dispatch({type: SIGN_IN_SUCCESS, payload: data.data});
      } else{
        dispatch({type: SIGN_IN_FAILING, payload: data});
      }
    }
  }
}