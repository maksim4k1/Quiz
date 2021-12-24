import { FIND_QUIZ } from "../../types";

export function findQuizAction(searchValue){
  return {type: FIND_QUIZ, payload: searchValue.toLowerCase()};
}