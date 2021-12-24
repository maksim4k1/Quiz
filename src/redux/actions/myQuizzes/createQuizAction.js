import { createNewQuiz } from "../../../api/myQuizzesRequests";
import { CREATE_QUIZ_FAILING, CREATE_QUIZ_LOADING, CREATE_QUIZ_SUCCESS } from "../../types"
import { logInAction } from "../auth/logInAction";

export function createQuizAction(formData, redirect){
  return async (dispatch) => {
    dispatch({type: CREATE_QUIZ_LOADING});

    if(!formData.name || formData.questions.find(question => !question.question) || formData.questions.find(question => question.answers.find(answer => !answer.answer))){
      dispatch({type: CREATE_QUIZ_FAILING, payload: "Заполните все поля"});
      return;
    } else if(!formData.category){
      dispatch({type: CREATE_QUIZ_FAILING, payload: "Выберите категорию"});
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

    console.log(formData)
    const response = await createNewQuiz(formData);
    const data = response.json ? await response.json() : "Error 500: Ошибка на сервере";
    
    if(response.ok){
      dispatch({type: CREATE_QUIZ_SUCCESS});
      dispatch(logInAction());
      console.log(data)
      redirect();
    } else{
      dispatch({type: CREATE_QUIZ_FAILING, payload: data});
    }
  }
}