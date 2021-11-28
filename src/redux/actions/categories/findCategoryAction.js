import { FIND_CATEGORY } from "../../types";

export function findCategoryAction(searchValue){
  return {type: FIND_CATEGORY, payload: searchValue.toLowerCase()};
}