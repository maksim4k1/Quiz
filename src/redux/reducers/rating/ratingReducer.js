import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOAD_RATING_FAILING, LOAD_RATING_LOADING, LOAD_RATING_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  rating: null,
  ratingState: stateCreator()
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
    default: {
      return state;
    }
  }
}

export default ratingReducer;