import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import UserCard from "../components/UI/Cards/UserCard";
import UsersList from "../components/UI/Lists/UsersList";
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

function MyQuiz () {
  const {id} = useParams();
  
  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {link: "/myquizzes", title: "Мои викторины"},
          {title: "Текущая страница"}
        ]}/>
        <Info>
          <Title>Теорема Виетта</Title>
          <Count>Пройдено 5 раз</Count>
          <UsersList>
            <UserCard image="" username="1. username" score={"20 / 30"}/>
            <UserCard image="" username="1. username" score={"20 / 30"}/>
            <UserCard image="" username="1. username" score={"20 / 30"}/>
            <UserCard image="" username="1. username" score={"20 / 30"}/>
            <UserCard image="" username="1. username" score={"20 / 30"}/>
          </UsersList>
          <Buttons>
            <NavLink to={`/quiz/${id}`}><Button>Викторина</Button></NavLink>
            <LightButton>Удалить</LightButton>
          </Buttons>
        </Info>
      </div>
    </Content>
  );
}

export default MyQuiz;