import stateCreator from "../../../utils/stateCreator";
import { DISABLE_GAME_BUTTONS, ENABLE_GAME_BUTTONS, FAILING, LOADING, LOAD_QUIZ_FAILING, LOAD_QUIZ_LOADING, LOAD_QUIZ_SUCCESS, NEXT_QUESTION, RIGHT_ANSWER, SET_BACKGROUND_COLOR, SET_SELECTED_ANSWERS, SUCCESS } from "../../types";

const initialState = {
  quiz: null,
  quizLogic: {
    question: 0,
    rightAnswers: 0,
    disableButtons: false,
    button: {
      id: 0,
      fill: null
    }
  },
  quizState: stateCreator()
}

const quizReducer = (state=initialState, {type, payload}) => {
  switch(type){
    // Load Quiz
    case LOAD_QUIZ_SUCCESS: {
      return {
        ...state,
        quizState: stateCreator(SUCCESS),
        quiz: payload,
        quizLogic: {
          ...state.quizLogic,
          rightAnswers: 0
        }
      }
    } case LOAD_QUIZ_LOADING: {
      return {
        ...state,
        quizState: stateCreator(LOADING)
      }
    } case LOAD_QUIZ_FAILING: {
      return {
        ...initialState,
        quizState: stateCreator(FAILING, payload)
      }
    }
    // Set selectd answers
    case SET_SELECTED_ANSWERS: {
      return {
        ...state,
        quiz: payload,
        quizState: stateCreator()
      };
    }
    // Next question
    case NEXT_QUESTION: {
      return {
        ...state,
        quizLogic: {
          ...state.quizLogic,
          question: state.quizLogic.question + 1 >= state.quiz.questions.length ? 0 : state.quizLogic.question + 1
        }
      }
    }
    // Right answer
    case RIGHT_ANSWER: {
      return {
        ...state,
        quizLogic: {
          ...state.quizLogic,
          rightAnswers: state.quizLogic.rightAnswers + 1
        }
      }
    }
    // Disable buttons
    case DISABLE_GAME_BUTTONS: {
      return {
        ...state,
        quizLogic: {
          ...state.quizLogic,
          disableButtons: true
        }
      }
    } case ENABLE_GAME_BUTTONS: {
      return {
        ...state,
        quizLogic: {
          ...state.quizLogic,
          disableButtons: false
        }
      }
    }
    // Set background
    case SET_BACKGROUND_COLOR: {
      return {
        ...state,
        quizLogic: {
          ...state.quizLogic,
          button: {
            id: payload.button,
            fill: payload.fill
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default quizReducer;