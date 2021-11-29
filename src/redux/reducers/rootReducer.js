import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./categories/categoriesReducer";
import quizzesReducer from "./quizzes/quizzesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  quizzes: quizzesReducer,
});

export default rootReducer;