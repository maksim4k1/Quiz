import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOAD_QUIZZES_FAILING, LOAD_QUIZZES_LOADING, LOAD_QUIZZES_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  quizzes: null,
  quizzesState: stateCreator(),
}

const quizzesReducer = (state=initialState, {type, payload}) => {
  switch(type){
    // Load Quizzes
    case LOAD_QUIZZES_SUCCESS: {
      return {
        ...state,
        quizzesState: stateCreator(SUCCESS),
        quizzes: payload
      }
    } case LOAD_QUIZZES_LOADING: {
      return {
        ...state,
        quizzesState: stateCreator(LOADING),
      }
    } case LOAD_QUIZZES_FAILING: {
      return {
        ...state,
        quizzesState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default quizzesReducer;