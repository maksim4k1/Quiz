import { SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "../../types";

export function signUpAction(){
  return async (dispatch) => {
    dispatch({type: SIGN_UP_LOADING});
    try{
      dispatch({type: SIGN_UP_SUCCESS});
    } catch{
      dispatch({type: SIGN_UP_FAILING, payload: "Error"});
    }
  }
}