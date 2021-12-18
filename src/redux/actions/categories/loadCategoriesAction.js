import { getData } from "../../../api/requests";
import { LOAD_CATEGORIES_FAILING, LOAD_CATEGORIES_LOADING, LOAD_CATEGORIES_SUCCESS } from "../../types"

export function loadCategoriesAction(){
  return async (dispatch) => {
    dispatch({type: LOAD_CATEGORIES_LOADING});

    const response = await getData("/categories");
    const data = await response.json();

    if(response.ok){
      dispatch({type: LOAD_CATEGORIES_SUCCESS, payload: data});
    } else{
      dispatch({type: LOAD_CATEGORIES_FAILING, payload: data});
    }
  }
}