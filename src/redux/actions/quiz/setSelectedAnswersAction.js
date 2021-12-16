import { SET_SELECTED_ANSWERS } from "../../types"

export function setSelectedAnswersAction(quiz){
  return {type: SET_SELECTED_ANSWERS, payload: quiz}
}