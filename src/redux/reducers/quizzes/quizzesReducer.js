import stateCreator from "../../../utils/stateCreator";
import { FAILING, FIND_QUIZ, LOADING, LOAD_QUIZZES_FAILING, LOAD_QUIZZES_LOADING, LOAD_QUIZZES_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  quizzes: null,
  foundQuizzes: null,
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
    // Find Quiz
    case FIND_QUIZ: {
      const foundQuizzes = state.quizzes
        ? state.quizzes.filter(quiz => {
          const title = quiz.title.toLowerCase();
          const description = quiz.description.toLowerCase();

          return title.includes(payload) || description.includes(payload)
        })
        : null;

      return {
        ...state,
        foundQuizzes: foundQuizzes
      }
    }
    default: {
      return state;
    }
  }
}

export default quizzesReducer;