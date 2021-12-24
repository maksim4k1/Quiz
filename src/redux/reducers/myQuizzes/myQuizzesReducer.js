import stateCreator from "../../../utils/stateCreator";
import { CREATE_QUIZ_FAILING, CREATE_QUIZ_LOADING, CREATE_QUIZ_SUCCESS, FAILING, LOADING, LOAD_MY_QUIZZES_FAILING, LOAD_MY_QUIZZES_LOADING, LOAD_MY_QUIZZES_SUCCESS, LOAD_MY_QUIZ_FAILING, LOAD_MY_QUIZ_LOADING, LOAD_MY_QUIZ_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  quizzes: null,
  quiz: null,
  quizzesState: stateCreator(),
  quizState: stateCreator(),
  createQuizState: stateCreator(),
}

const myQuizzesReducer = (state=initialState, {type, payload}) => {
  switch(type){
    // Load my quizzes
    case LOAD_MY_QUIZZES_SUCCESS: {
      return {
        ...state,
        quizzesState: stateCreator(SUCCESS),
        quizzes: payload,
      };
    } case LOAD_MY_QUIZZES_LOADING: {
      return {
        ...state,
        quizzesState: stateCreator(LOADING),
      };
    } case LOAD_MY_QUIZZES_FAILING: {
      return {
        ...state,
        quizzesState: stateCreator(FAILING, payload),
        quizzes: null,
      };
    }
    // Load my quiz
    case LOAD_MY_QUIZ_SUCCESS: {
      return {
        ...state,
        quizState: stateCreator(SUCCESS),
        quiz: payload,
      };
    } case LOAD_MY_QUIZ_LOADING: {
      return {
        ...state,
        quizState: stateCreator(LOADING),
      };
    } case LOAD_MY_QUIZ_FAILING: {
      return {
        ...state,
        quizState: stateCreator(FAILING, payload),
        quiz: null,
      };
    }
    // Create quiz
    case CREATE_QUIZ_SUCCESS: {
      return{
        ...state,
        createQuizState: stateCreator(SUCCESS),
      }
    } case CREATE_QUIZ_LOADING: {
      return{
        ...state,
        createQuizState: stateCreator(LOADING),
      }
    } case CREATE_QUIZ_FAILING: {
      return{
        ...state,
        createQuizState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default myQuizzesReducer;