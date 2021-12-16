import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AnswerCard from "../components/UI/Cards/AnswerCard";
import { loadQuizAction } from "../redux/actions/quiz/loadQuizAction";
import { setSelectedAnswersAction } from "../redux/actions/quiz/setSelectedAnswersAction";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Title = styled.h5`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;
const Question = styled.div`
  margin: 20px 0 40px;
  font-size: 24px;
  display: flex;
  ${gap("10px")}
`;
const Answers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${gap("100px", "50px")}
`;

function Game ({quiz, quizInfo, loadQuiz, setSelectedAnswers}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(0);
  const answers = useRef(null);

  useEffect(() => {
    if(!quiz || quiz.id !== id){
      loadQuiz(id);
    }
  }, [quiz, id, loadQuiz]);

  function nextQuestion(event){
    const id = event.target.id;
    const answer = quiz.questions[question].answers[id];
    const buttons = answers.current.children;

    if(answer.isTrue){
      event.target.style.background = "var(--color-green)";
    } else{
      event.target.style.background = "var(--color-red)";
    }

    answer.myAnswer = true;

    for(let i = 0; i < buttons.length; i++){
      buttons[i].setAttribute("disabled", true);
    }

    setTimeout(() => {
      if(quiz.questions.length > question + 1){
        setQuestion((question) => question + 1);
      } else{
        setSelectedAnswers(quiz);
        navigate("/game/result/");
      }
      
      for(let i = 0; i < buttons.length; i++){
        buttons[i].removeAttribute("disabled");
      }
      event.target.style = null;
    }, 1000);
  }

  return(
    <Content>
      <div className="small_container">
        {
          quizInfo.loading
          ? <div>Загрузка</div>
          : quiz
          ? <>
            <Title>{quiz.name}</Title>
            <Question>
              <div>{question + 1}.</div>
              <p>{quiz.questions[question].question}</p>
            </Question>
            <Answers ref={answers}>
              {
                quiz.questions[question].answers.map((answer, index) => {
                  return <AnswerCard onClick={nextQuestion} id={index} key={index} value={answer.answer}>{answer.answer}</AnswerCard>
                })
              }
            </Answers>
          </>
          : <div>{quizInfo.error}</div>
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  quizInfo: state.quiz.quizState,
});
const mapDispatchToProps = {
  loadQuiz: loadQuizAction,
  setSelectedAnswers: setSelectedAnswersAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);