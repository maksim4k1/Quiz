import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./categories/categoriesReducer";
import quizReducer from "./quiz/quizReducer";
import quizzesReducer from "./quizzes/quizzesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  quizzes: quizzesReducer,
  quiz: quizReducer,
});

export default rootReducer;