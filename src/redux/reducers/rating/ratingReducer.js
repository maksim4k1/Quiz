import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOAD_RATING_FAILING, LOAD_RATING_LOADING, LOAD_RATING_SUCCESS, LOAD_USER_PROFILE_FAILING, LOAD_USER_PROFILE_LOADING, LOAD_USER_PROFILE_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  rating: null,
  ratingState: stateCreator(),
  userProfile: null,
  userProfileState: stateCreator(),
};

const ratingReducer = (state=initialState, {type, payload}) => {
  switch(type){
    // Load rating
    case LOAD_RATING_SUCCESS: {
      return {
        ...state,
        ratingState: stateCreator(SUCCESS),
        rating: payload
      }
    } case LOAD_RATING_LOADING: {
      return {
        ...state,
        ratingState: stateCreator(LOADING),
      }
    } case LOAD_RATING_FAILING: {
      return {
        ...state,
        ratingState: stateCreator(FAILING, payload),
      }
    }
    // Load user profile
    case LOAD_USER_PROFILE_SUCCESS: {
      return{
        ...state,
        userProfileState: stateCreator(SUCCESS),
        userProfile: payload
      }
    } case LOAD_USER_PROFILE_LOADING: {
      return{
        ...state,
        userProfileState: stateCreator(LOADING)
      }
    } case LOAD_USER_PROFILE_FAILING: {
      return{
        ...state,
        userProfileState: stateCreator(FAILING, payload),
        userProfile: null
      }
    }
    default: {
      return state;
    }
  }
}

export default ratingReducer;