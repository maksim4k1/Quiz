import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../../components/Breadcrumbs";
import AppLink from "../../components/UI/AppLink";
import { gap } from "../../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
const Info = styled.p`
  color: var(--color-text-gray);
  text-align: center;
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
  ${gap("40px")};
`;

function AuthError () {
  return(
    <Content>
      <Container className="small_container">
        <Breadcrumbs road={[
          {title: "Страница недоступна"}
        ]}/>
        <Title>Эта страница недоступна</Title>
        <Info>Чтобы перейти на эту страницу следует авторизоваться</Info>
        <Links>
          <AppLink to="/signin">Авторизация</AppLink>
          <AppLink to="/signup">Регистрация</AppLink>
        </Links>
      </Container>
    </Content>
  );
}

export default AuthError;