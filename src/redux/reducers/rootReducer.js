import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./categories/categoriesReducer";
import myQuizzesReducer from "./myQuizzes/myQuizzesReducer";
import quizReducer from "./quiz/quizReducer";
import quizzesReducer from "./quizzes/quizzesReducer";
import ratingReducer from "./rating/ratingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  quizzes: quizzesReducer,
  quiz: quizReducer,
  rating: ratingReducer,
  myQuizzes: myQuizzesReducer,
});

export default rootReducer;