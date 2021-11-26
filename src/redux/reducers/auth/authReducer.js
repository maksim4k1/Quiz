import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOG_OUT, SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  isAuth: false,
  profile: null,
  signIn: stateCreator(),
  signUp: stateCreator()
}

const authReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    // Sign In
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        signIn: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case SIGN_IN_LOADING: {
      return {
        ...state,
        signIn: stateCreator(LOADING),
      }
    } case SIGN_IN_FAILING: {
      return {
        ...state,
        signIn: stateCreator(FAILING, payload),
      }
    }
    // Sign Up
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUp: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case SIGN_UP_LOADING: {
      return {
        ...state,
        signUp: stateCreator(LOADING),
      }
    } case SIGN_UP_FAILING: {
      return {
        ...state,
        signUp: stateCreator(FAILING, payload),
      }
    }
    // Log Out
    case LOG_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default authReducer;