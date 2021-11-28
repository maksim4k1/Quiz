import React from "react";
import styled from "styled-components";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { gap } from "../styles/mixins";
import randomColorGenerator from "../utils/randomColorGenerator";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;

function Category () {
  return(
    <Content>
      <Container className="container">
        <Description
          title="Математика"
          onChange={() => {}}
          value={""}
          description="Викронины на знание основ алгебры и геометрии. Реши задачи и узнай свой уровень в математике!"
        />
        <CardList>
          <Card title="Теорема Виетта" description="Викторина на умение находить корни уравнения через теорему Виетта и через дискриминант" link={`/quiz/1`} fill={randomColorGenerator()}/>
        </CardList>
      </Container>
    </Content>
  );
}

export default Category;