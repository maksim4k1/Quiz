import { LOAD_CATEGORIES_FAILING, LOAD_CATEGORIES_LOADING, LOAD_CATEGORIES_SUCCESS } from "../../types"

export function loadCategoriesAction(){
  return async (dispatch) => {
    dispatch({type: LOAD_CATEGORIES_LOADING});
    try{
      setTimeout(() => dispatch({type: LOAD_CATEGORIES_SUCCESS, payload: [
          {id: 1, title: "Математика", description: "Викронины на знание основ алгебры и геометрии. Реши задачи и узнай свой уровень в математике!"},
          {id: 2, title: "История", description: "Проверь звои знания и узнай когда и при каких обстоятельствах произошли самые интересные события в истории!"},
          {id: 3, title: "Георгафия", description: "Хорошо знаешь георгафию? Страны, города, реки, озера, горы и многое другое? Тогда проверь свои знания в викторинах по географии!  "},
          {id: 4, title: "Цветы", description: "Хорошо разбираешься в садоводстве и знаешь многие виды цветов? Докажи это пройдя викторины на знание цветов!"},
          {id: 5, title: "Биология", description: "Узнай свои знания в биологии, пройдя этот тест."},
          {id: 6, title: "Фильмы и мультфильмы", description: "Пройди наши викторины и похвастайся своими знаниями в фильмах и мультфильмах!"},
          {id: 7, title: "Чудеса света", description: "Кто постоил пирамиды? Почему Пизанкая башня стоит криво? Где находиться Атланnbда? Это и многое другое вы узнаете пройдя эту викторину!"},
          {id: 8, title: "Вселенная Marvel", description: "Узнай новые факты и проверь свои знания о мультивселенной Marvel. Тысячи героев уже ждут тебя!"},
        ]}
      ), 500);
    } catch{
      dispatch({type: LOAD_CATEGORIES_FAILING, payload: "Error"});
    }
  }
}