import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import ResultCard from "../components/UI/Cards/ResultCard";
import { updateScoreAction } from "../redux/actions/quiz/updateScoreAction";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;
const Score = styled.div`
  font-size: 18px;
  text-align: center;
`;
const Results = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;
const SubTitle = styled.h5`
  font-size: 22px;
  font-weight: 600;
`;
const List = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  ${gap("30px")}
`;

function GameResult ({quiz, quizLogic, profile, updateScore}) {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [username] = useState(profile ? profile.username : "");

  useEffect(() => {
    if(!quiz){
      navigate("/error/404");
    }
    if(username && quizLogic && quiz){
      setResult({
        username: username,
        score: quizLogic.rightAnswers,
        quizId: quiz.id
      });
    }
  }, [quiz, quizLogic, username, updateScore, navigate]);

  useEffect(() => {
    if(result){
      updateScore(result);
    }
  }, [result, updateScore]);

  return(
    <Content>
      <div className="small_container">
        {
          quiz
          ? <>
            <Breadcrumbs road={[
              {link: "/categories", title: "Категории"},
              {link: `/category/${quiz.category}`, title: "Математика"},
              {link: `/quiz/${quiz.id}`, title: quiz.name},
              {title: "Результат"},
            ]}/>
            <Container>
              <Title>Результат прохождения</Title>
              <Score>Набрано баллов: <span style={{color: `var(--color-${quizLogic.rightAnswers >= quiz.questions.length / 2 ? "green" : "red"})`}}>{quizLogic.rightAnswers}</span> из {quiz.questions.length}</Score>
              <Results>
                <SubTitle>Верные ответы:</SubTitle>
                <List>
                  {
                    quiz.questions.map((question, index) => {
                      return <ResultCard
                        key={index}
                        question={question.question}
                        myAnswer={question.answers.find((answer) => answer.myAnswer === true).answer}
                        rightAnswer={question.answers.find((answer) => answer.isTrue === true).answer}
                      />
                    })
                  }
                </List>
              </Results>
              <Buttons>
                <NavLink to="/profile"><Button>Профиль</Button></NavLink>
                <NavLink to="/rating"><LightButton>Рейтинг игроков</LightButton></NavLink>
              </Buttons>
            </Container>
          </>
          : null
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  quizLogic: state.quiz.quizLogic,
  profile: state.auth.profile
});
const mapDispatchToProps = {
  updateScore: updateScoreAction
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);