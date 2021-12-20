import { deleteToken } from "../../../storage/localStorage";
import { LOG_OUT } from "../../types";

export function logOutAction(){
  deleteToken();
  return {type: LOG_OUT};
}