import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../../components/Breadcrumbs";
import Content from "../../components/Content";
import AppLink from "../../components/UI/AppLink";

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
  &>a{
    font-weight: 600;
    font-size: inherit;
  }
`;

function Error404 () {
  return(
    <Content>
      <div className="small_container">
        <Breadcrumbs road={[
          {title: "Ошибка 404"}
        ]}/>
        <ErrorTitle>Ошибка 404</ErrorTitle>
        <ErrorText><strong>Ошибка:</strong> cтраница не найдена.</ErrorText>
        <Redirect>Вернуться на <AppLink to="/">Главную</AppLink> страницу.</Redirect>
      </div>
    </Content>
  );
}

export default Error404;