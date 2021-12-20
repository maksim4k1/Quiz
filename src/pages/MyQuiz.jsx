import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import InfoText from "../components/InfoText";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import UserCard from "../components/UI/Cards/UserCard";
import UsersList from "../components/UI/Lists/UsersList";
import { loadMyQuizAction } from "../redux/actions/myQuizzes/loadMyQuizAction";
import { gap } from "../styles/mixins";

const Info = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;
const Count = styled.div`
  font-weight: 600;
  text-align: center;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  ${gap("25px")}
`;

function MyQuiz ({quiz, info, profile, loadQuiz}) {
  const {id} = useParams();
  const [username] = useState(profile ? profile.username : "");

  useEffect(() => {
    loadQuiz(id, username);
  }, [id, username, loadQuiz]);

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {link: "/myquizzes", title: "Мои викторины"},
          {title: quiz ? quiz.title : "Текущая страница"}
        ]}/>
        {
          info.loading
          ? <InfoText>Загрузка...</InfoText>
          : quiz
          ? <Info>
            <Title>{quiz.title}</Title>
            <Count>Пройдено {quiz.attempts} раз</Count>
            <UsersList>
              {
                quiz.results.map((result, index) => {
                  return <UserCard
                  key={index}
                  image={result.image}
                  username={`${index + 1}. ${result.username}`}
                  scoreFill={(quiz.maxScore / result.result) <= (quiz.maxScore / 2) ? "var(--color-green)" : "var(--color-red)"}
                  score={`${result.result} / ${quiz.maxScore}`}/>
                })
              }
            </UsersList>
            <Buttons>
              <NavLink to={`/quiz/${id}`}><Button>Викторина</Button></NavLink>
              <LightButton>Удалить</LightButton>
            </Buttons>
          </Info>
        : <InfoText>{info.error}</InfoText>
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.myQuizzes.quiz,
  info: state.myQuizzes.quizState,
  profile: state.auth.profile,
});
const mapDispatchToProps = {
  loadQuiz: loadMyQuizAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MyQuiz);