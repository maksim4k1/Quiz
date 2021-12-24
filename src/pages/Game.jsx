import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AnswerCard from "../components/UI/Cards/AnswerCard";
import { loadQuizAction } from "../redux/actions/quiz/loadQuizAction";
import { nextQuestionAction } from "../redux/actions/quiz/nextQuestionAction";
import { gap } from "../styles/mixins";
import Content from "../components/Content";
import InfoText from "../components/InfoText";

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

function Game ({quiz, quizLogic, quizInfo, loadQuiz, nextQuestion}) {
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadQuiz(id);
  }, [id, loadQuiz]);

  function nextQuestionHandler(event){
    const buttonId = Number(event.target.id);
    nextQuestion(
      quiz,
      quizLogic.question,
      buttonId,
      navigate
    );
  }

  return(
    <Content>
      <div className="small_container">
        {
          quizInfo.loading
          ? <InfoText>Загрузка</InfoText>
          : quiz
          ? <>
            <Title>{quiz.name}</Title>
            <Question>
              <div>{quizLogic.question + 1}.</div>
              <p>{quiz.questions[quizLogic.question].question}</p>
            </Question>
            <Answers>
              {
                quiz.questions[quizLogic.question].answers.map((answer, index) => {
                  return <AnswerCard
                    disabled={quizLogic.disableButtons}
                    onClick={nextQuestionHandler}
                    id={index}
                    style={index === quizLogic.button.id ? {background: quizLogic.button.fill} : null}
                    key={index}
                  >
                    {answer.answer}
                  </AnswerCard>
                })
              }
            </Answers>
          </>
          : <InfoText>{quizInfo.error}</InfoText>
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  quizLogic: state.quiz.quizLogic,
  quizInfo: state.quiz.quizState,
});
const mapDispatchToProps = {
  loadQuiz: loadQuizAction,
  nextQuestion: nextQuestionAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);