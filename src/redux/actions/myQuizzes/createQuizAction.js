import { CREATE_QUIZ_FAILING, CREATE_QUIZ_LOADING, CREATE_QUIZ_SUCCESS } from "../../types"

export function createQuizAction(formData){
  return async (dispatch) => {
    dispatch({type: CREATE_QUIZ_LOADING});

    if(!formData.name || !formData.category || formData.questions.find(question => !question.question) || formData.questions.find(question => question.answers.find(answer => !answer.answer))){
      dispatch({type: CREATE_QUIZ_FAILING, payload: "Заполните все поля"});
      return;
    } else if(formData.questions.find(question => !question.answers.find(answer => answer.isTrue))){
      dispatch({type: CREATE_QUIZ_FAILING, payload: "Выберите верные варианты ответов"});
      return;
    } else{
      for(let i = 0; i < formData.questions.length; i++){
        const question = formData.questions[i];
        let lastAnswer = "";

        for(let j = 0; j < question.answers.length; j++){
          const answer = question.answers[j].answer;
          
          if(lastAnswer === answer){
            dispatch({type: CREATE_QUIZ_FAILING, payload: "Варианты ответов не могут повторятся"});
            return;
          } else{
            lastAnswer = answer;
          }
        }
      }
    }

    dispatch({type: CREATE_QUIZ_SUCCESS, payload: ""});
  }
}