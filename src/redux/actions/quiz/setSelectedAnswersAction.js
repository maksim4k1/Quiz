import { SET_SELECTED_ANSWERS } from "../../types"

export function setSelectedAnswersAction(quiz, question, answerId){
  const quizCopy = {...quiz};
  const answers = quizCopy.questions[question].answers;

  for(let i = 0; i < answers.length; i++){
    const answer = answers[i];
    if(i !== answerId){
      answer.myAnswer = false;
    } else{
      answer.myAnswer = true;
    }
  }

  return {type: SET_SELECTED_ANSWERS, payload: quizCopy}
}