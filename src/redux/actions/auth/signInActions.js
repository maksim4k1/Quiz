import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});
    try{
      dispatch({type: SIGN_IN_SUCCESS});
    } catch{
      dispatch({type: SIGN_IN_FAILING, payload: "Error"});
    }
  }
}