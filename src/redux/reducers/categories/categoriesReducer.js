import stateCreator from "../../../utils/stateCreator";
import { FAILING, FIND_CATEGORY, LOADING, LOAD_CATEGORIES_FAILING, LOAD_CATEGORIES_LOADING, LOAD_CATEGORIES_SUCCESS, SUCCESS } from "../../types";

const initialState = {
  categories: null,
  foundCategories: null,
  categoriesState: stateCreator()
}

const categoriesReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    // Load Categories
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
    // FindCategory
    case FIND_CATEGORY: {
      const foundCategories = state.categories
        ? state.categories.filter(category => {
          const title = category.title.toLowerCase();
          const description = category.description.toLowerCase();
          
          if(title.includes(payload) || description.includes(payload)){
            return category;
          }
        })
        : null;

      return {
        ...state,
        foundCategories: foundCategories
      }
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;