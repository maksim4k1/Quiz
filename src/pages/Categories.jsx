import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;
const InfoText = styled.div`
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function Categories ({categories, info, loadCtegories}) {
  const [serchValue, setSearchValue] = useState("");

  useEffect(() => {
    if(!categories || !categories.length){
      loadCtegories();
    }
  }, [loadCtegories, categories]);

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
        {
          info.loading
          ? <InfoText>Подождите, идёт загрузка...</InfoText>
          : categories && categories.length
          ? <CardList>
            {
              categories.map(category => {
                return <Card key={category.id} title={category.title} description={category.description} link={`/category/${category.id}`} fill="#D6D6D6"/>
              })
            }
          </CardList>
          : <InfoText>Категории не найдены</InfoText>
        }
        
      </Container>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  info: state.categories.categoriesState
});
const mapDispatchToProps = {
  loadCtegories: loadCategoriesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);