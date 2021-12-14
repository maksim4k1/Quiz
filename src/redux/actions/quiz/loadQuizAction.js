import { LOAD_QUIZ_FAILING, LOAD_QUIZ_LOADING, LOAD_QUIZ_SUCCESS } from "../../types"

export function loadQuizAction(id){
  return async (dispatch) => {
    dispatch({type: LOAD_QUIZ_LOADING});
    try{
      setTimeout(() => {
        let data = null;
        if(id === "1"){
          data = {
            id: "1",
            name: "Теорема Виетта",
            description: "Викторина на умение находить корни уравнения через теорему Виетта и через дискриминант.",
            category: 1,
            author: 1,
            questions: [
              {
                question: "Решите пример: 2 + 2 = ...",
                answers: [
                  { answer: "3", isTrue: false },
                  { answer: "4", isTrue: true },
                  { answer: "8", isTrue: false },
                  { answer: "Нет правильного ответа", isTrue: false }
                ]
              },
              {
                question: "Решите пример: 4 + 5 = ...",
                answers: [
                  { answer: "9", isTrue: true },
                  { answer: "5", isTrue: false },
                  { answer: "8", isTrue: false },
                  { answer: "Нет правильного ответа", isTrue: false }
                ]
              },
              {
                question: "Решите пример: 8 * 7 = ...",
                answers: [
                  { answer: "15", isTrue: false },
                  { answer: "64", isTrue: false },
                  { answer: "56", isTrue: true },
                  { answer: "Нет правильного ответа", isTrue: false }
                ]
              }
            ],
            results: [
              { user: 1, score: 3 }
            ]
          }
        } else{
          dispatch({type: LOAD_QUIZ_FAILING, payload: "Ошибка на сервере"});
        }
        dispatch({type: LOAD_QUIZ_SUCCESS, payload: data});
      }, 500);
    } catch{
      dispatch({type: LOAD_QUIZ_FAILING, payload: "Error"});
    }
  }
}