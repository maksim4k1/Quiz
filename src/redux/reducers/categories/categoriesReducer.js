import stateCreator from "../../../utils/stateCreator";
import { FAILING, LOADING, LOAD_CATEGORIES_FAILING, LOAD_CATEGORIES_LOADING, LOAD_CATEGORIES_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  categories: null,
  categoriesState: stateCreator()
}

const categoriesReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categoriesState: stateCreator(SUCCESS),
        categories: payload
      }
    } case LOAD_CATEGORIES_LOADING: {
      return {
        ...state,
        categoriesState: stateCreator(LOADING)
      }
    } case LOAD_CATEGORIES_FAILING: {
      return {
        ...state,
        categoriesState: stateCreator(FAILING, payload)
      }
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;