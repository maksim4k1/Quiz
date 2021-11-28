import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { findCategoryAction } from "../redux/actions/categories/findCategoryAction";
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

function Categories ({categories, foundCategories, info, loadCtegories, findCategory}) {
  const [serchValue, setSearchValue] = useState("");

  useEffect(() => {
    if(!categories || !categories.length){
      loadCtegories();
    }
    
    findCategory(serchValue);
  }, [loadCtegories, categories, findCategory, serchValue]);

  function onChangeHandler(event){
    setSearchValue(event.target.value);
  }

  return(
    <Content>
      <Container className="container">
        <Description
          title="Категории"
          onChange={onChangeHandler}
          value={serchValue}
        />
        {
          info.loading
          ? <InfoText>Подождите, идёт загрузка...</InfoText>
          : foundCategories && foundCategories.length
          ? <CardList>
            {
              foundCategories.map(category => {
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
  foundCategories: state.categories.foundCategories,
  info: state.categories.categoriesState
});
const mapDispatchToProps = {
  loadCtegories: loadCategoriesAction,
  findCategory: findCategoryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);