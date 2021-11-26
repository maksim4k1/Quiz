import { SIGN_IN_FAILING, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "../../types";

export function signInAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: SIGN_IN_LOADING});
    try{
      setTimeout(() => {
        if(formData.username && formData.password){
          redirect();
          dispatch({type: SIGN_IN_SUCCESS, payload: {
            id: 0,
            username: "Maks",
            name: "Максим",
            description: "Front-End разработчик",
            score: 18,
            image: "https://www.ladymakeup.com/js/lightbox/img/demopage/image-3.jpg",
          }});
        } else{
          dispatch({type: SIGN_IN_FAILING, payload: "Заполните все поля"});
        }
      }, 500);
    } catch{
      dispatch({type: SIGN_IN_FAILING, payload: "Error"});
    }
  }
}