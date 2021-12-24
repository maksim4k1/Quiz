import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import InfoText from "../components/InfoText";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { findCategoryAction } from "../redux/actions/categories/findCategoryAction";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
import randomColorGenerator from "../utils/randomColorGenerator";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

function Categories ({categories, foundCategories, info, loadCategories, findCategory}) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if(!categories || !categories.length){
      loadCategories();
    }

    findCategory(searchValue);
  }, [loadCategories, categories, findCategory, searchValue]);

  function onChangeHandler(event){
    setSearchValue(event.target.value);
  }

  return(
    <Content>
      <Container className="container">
        <Breadcrumbs road={[
          {title: "Категории"}
        ]}/>
        <Description
          title="Категории"
          onChange={onChangeHandler}
          value={searchValue}
        />
        {
          info.loading
          ? <InfoText>Подождите, идёт загрузка...</InfoText>
          : foundCategories && foundCategories.length
          ? <CardList>
            {
              foundCategories.map(category => {
                return <Card key={category.id} title={category.title} description={category.description} link={`/category/${category.id}`} fill={randomColorGenerator()}/>
              })
            }
          </CardList>
          : <InfoText>{info.error}</InfoText>
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
  loadCategories: loadCategoriesAction,
  findCategory: findCategoryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);