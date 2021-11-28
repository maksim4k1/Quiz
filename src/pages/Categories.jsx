import React, { useState } from "react";
import styled from "styled-components";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;

function Categories () {
  const [serchValue, setSearchValue] = useState("");

  function searcHandler(event){
    event.preventDefault();
  }

  function onChangeHandler(event){
    setSearchValue(event.target.value);
  }

  return(
    <Content>
      <Container className="container">
        <Description
          title="Категории"
          onSubmit={searcHandler}
          onChange={onChangeHandler}
          value={serchValue}
        />
        <CardList>
          <Card title="Математика" description="Викронины на знание основ алгебры и геометрии. Реши задачи и узнай свой уровень в математике!" link="/" fill="#D6D6D6"/>
        </CardList>
      </Container>
    </Content>
  );
}

export default Categories;