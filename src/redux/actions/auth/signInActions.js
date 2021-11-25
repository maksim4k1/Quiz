import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInSuccessAction(){
  return {type: SIGN_IN_SUCCESS};
}

export function signInLoadingAction(){
  return {type: SIGN_IN_LOADING};
}

export function signInFailingAction(){
  return {type: SIGN_IN_FAILING};
}