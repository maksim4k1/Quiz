import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../../components/Breadcrumbs";
import AppLink from "../../components/UI/AppLink";
import Content from "../../components/Content";

const ErrorTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;
const ErrorText = styled.p`
  margin: 20px 0 30px;
  font-size: 18px;
  &>strong{
    font-weight: 600;
  }
`;
const Redirect = styled.div`
  font-size: 18px;
  &>a{
    font-weight: 600;
    font-size: inherit;
  }
`;

function AuthError () {
  return(
    <Content>
      <div className="small_container">
        <Breadcrumbs road={[
          {title: "Страница недоступна"}
        ]}/>
        <ErrorTitle>Эта страница недоступна</ErrorTitle>
        <ErrorText>Ошибка: вы не вошли в аккаунт</ErrorText>
        <Redirect>Для того чтобы перейти на эту страницу нужно <AppLink to="/signin">Авторизоваться</AppLink></Redirect>
      </div>
    </Content>
  );
}

export default AuthError;