import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Button from "../components/UI/Buttons/Button";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Info = styled.ul`
  margin: 40px 0 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  ${gap("10px")}
  font-size: 18px;
  & strong{
    color: var(--color-red);
    font-weight: 600;
    margin: 0 0 0 10px;
  }
`;

function Quiz () {
  const {id} = useParams();

  return(
    <Content>
      <div className="container">
        <Breadcrumbs road={[
          {link: `/categories`, title: "Категории"},
          {link: `/category/1`, title: "Математика"},
          {title: "Теорема Виетта"}
        ]}/>
        <Description
          title="Теорема Виетта"
          description="Викторина на умение находить корни уравнения через теорему Виетта и через дискриминант."
          style={{margin: 0}}
        />
        <Info>
          <p>Максимальное кол-во баллов: <strong>{id}</strong></p>
          <p>Количество вопросов: <strong>{id}</strong></p>
          <p>Категория: <strong>Математика</strong></p>
          <p>Автор: <strong>maksim4k1</strong></p>
        </Info>
        <Button>Пройти</Button>
      </div>
    </Content>
  );
}

export default Quiz;