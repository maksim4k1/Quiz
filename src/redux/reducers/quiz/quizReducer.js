import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOAD_QUIZ_FAILING, LOAD_QUIZ_LOADING, LOAD_QUIZ_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  quiz: null,
  quizState: stateCreator()
}

const quizReducer = (state=initialState, {type, payload}) => {
  switch(type){
    // Load Quiz
    case LOAD_QUIZ_SUCCESS: {
      return {
        ...state,
        quizState: stateCreator(SUCCESS),
        quiz: payload
      }
    } case LOAD_QUIZ_LOADING: {
      return {
        ...state,
        quizState: stateCreator(LOADING)
      }
    } case LOAD_QUIZ_FAILING: {
      return {
        ...state,
        quizState: stateCreator(FAILING, payload)
      }
    }
    default: {
      return state;
    }
  }
}

export default quizReducer;