import { deleteProfileData } from "../../../storage/localStorage";
import { LOG_OUT } from "../../types";

export function logOutAction(){
  deleteProfileData();
  return {type: LOG_OUT};
}