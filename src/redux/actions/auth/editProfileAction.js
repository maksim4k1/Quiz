import { editProfileData } from "../../../api/editProfileRequests";
import { EDIT_PROFILE_FAILING, EDIT_PROFILE_LOADING, EDIT_PROFILE_SUCCESS } from "../../types"

export function editProfileAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PROFILE_LOADING});

    if(!formData.username || !formData.name){
      dispatch({type: EDIT_PROFILE_FAILING, payload: "Заполните все поля"});
    } else{
      const response = await editProfileData(formData);
      const data = response.json ? await response.json() : "Error 500: Ошибка сервера";

      if(response.ok){
        redirect();
        dispatch({type: EDIT_PROFILE_SUCCESS, payload: data});
      } else{
        dispatch({type: EDIT_PROFILE_FAILING, payload: data});
      }
    }
  }
}