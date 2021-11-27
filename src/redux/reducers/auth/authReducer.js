import stateCreator from "../../../utils/stateCreator";
import { EDIT_PROFILE_FAILING, EDIT_PROFILE_LOADING, EDIT_PROFILE_SUCCESS, FAILING, LOADING, LOG_OUT, SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_UP_FAILING, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  isAuth: false,
  profile: null,
  profileState: stateCreator(),
  signInState: stateCreator(),
  signUpState: stateCreator(),
}

const authReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    // Sign In
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        signInState: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case SIGN_IN_LOADING: {
      return {
        ...state,
        signInState: stateCreator(LOADING),
      }
    } case SIGN_IN_FAILING: {
      return {
        ...state,
        signInState: stateCreator(FAILING, payload),
      }
    }
    // Sign Up
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpState: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case SIGN_UP_LOADING: {
      return {
        ...state,
        signUpState: stateCreator(LOADING),
      }
    } case SIGN_UP_FAILING: {
      return {
        ...state,
        signUpState: stateCreator(FAILING, payload),
      }
    }
    // Log Out
    case LOG_OUT: {
      return initialState;
    }
    // Edit Profile
    case EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        profileState: stateCreator(SUCCESS),
        profile: payload,
      }
    } case EDIT_PROFILE_LOADING: {
      return {
        ...state,
        profileState: stateCreator(LOADING),
      }
    } case EDIT_PROFILE_FAILING: {
      return {
        ...state,
        profileState: stateCreator(FAILING, payload),
      }
    }

    default: {
      return state;
    }
  }
}

export default authReducer;