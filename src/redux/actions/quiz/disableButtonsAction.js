import { DISABLE_GAME_BUTTONS, ENABLE_GAME_BUTTONS } from "../../types";

export function disableButtonsAction(){
  return {type: DISABLE_GAME_BUTTONS}
}
export function enableButtonsAction(){
  return {type: ENABLE_GAME_BUTTONS}
}