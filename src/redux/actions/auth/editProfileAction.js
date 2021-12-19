import { EDIT_PROFILE_FAILING, EDIT_PROFILE_LOADING, EDIT_PROFILE_SUCCESS } from "../../types"

export function editProfileAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PROFILE_LOADING});
    try{
      setTimeout(() => {
        if(!formData.username || !formData.name){
          dispatch({type: EDIT_PROFILE_FAILING, payload: "Заполните все поля"});
        } else{
          redirect();
          dispatch({type: EDIT_PROFILE_SUCCESS, payload: formData});
        }
      }, 200);
    } catch{
      dispatch({type: EDIT_PROFILE_FAILING, payload: "Error"});
    }
  }
}