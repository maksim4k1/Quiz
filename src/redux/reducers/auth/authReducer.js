import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  isAuth: false,
  profile: null,
  signIn: stateCreator(),
  signUp: stateCreator()
}

const authReducer = (state=initialState, {type}) => {
  switch (type) {
    // Sign In
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        signIn: stateCreator(SUCCESS),
        isAuth: true,
      }
    } case SIGN_IN_LOADING: {
      return {
        ...state,
        signIn: stateCreator(LOADING),
      }
    } case SIGN_IN_FAILING: {
      return {
        ...state,
        signIn: stateCreator(FAILING),
      }
    }
    // Sign Up
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUp: stateCreator(SUCCESS),
        isAuth: true,
      }
    } case SIGN_UP_LOADING: {
      return {
        ...state,
        signUp: stateCreator(LOADING),
      }
    } case SIGN_UP_FAILING: {
      return {
        ...state,
        signUp: stateCreator(FAILING),
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;