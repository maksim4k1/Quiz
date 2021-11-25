import { SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "../../types";

export function signUpSuccessAction(){
  return {type: SIGN_UP_SUCCESS};
}

export function signUpLoadingAction(){
  return {type: SIGN_UP_LOADING};
}

export function signUpFailingAction(){
  return {type: SIGN_UP_FAILING};
}