import { EDIT_PROFILE_FAILING, EDIT_PROFILE_LOADING, EDIT_PROFILE_SUCCESS } from "../../types"

export function editProfileAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: EDIT_PROFILE_LOADING});
    try{
      setTimeout(() => {
        if(!formData.username || !formData.name){
          dispatch({type: EDIT_PROFILE_FAILING, payload: "Заполните все поля"});
        } else if(formData.username === "maksim4k1"){
          dispatch({type: EDIT_PROFILE_FAILING, payload: "Пользователь с таким именем уже существует"});
        } else{
          redirect();
          dispatch({type: EDIT_PROFILE_SUCCESS, payload: formData});
        }
      }, 500);
    } catch{
      dispatch({type: EDIT_PROFILE_FAILING, payload: "Error"});
    }
  }
}