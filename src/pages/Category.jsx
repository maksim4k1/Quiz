import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
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
const InfoText = styled.div`
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function Category ({categories, categoriesInfo, loadCategories}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    if(!categories || !categories.length){
      loadCategories();
    }

    if(categories){
      const category = categories.find(category => category.id === Number(id));
      if(category){
        setSelectedCategory(category);
      } else{
        navigate("/error/404");
      }
    }
  }, [id, loadCategories, categories]);

  return(
    <Content>
      {
        categoriesInfo.loading
        ? <InfoText>Подождите, идёт загрузка...</InfoText>
        : <Container className="container">
          <Description
            title={selectedCategory.title}
            onChange={() => {}}
            value={""}
            description={selectedCategory.description}
          />
          <CardList>
            <Card title="Теорема Виетта" description="Викторина на умение находить корни уравнения через теорему Виетта и через дискриминант" link={`/quiz/1`} fill={randomColorGenerator()}/>
          </CardList>
        </Container>
      }
    </Content>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  categoriesInfo: state.categories.categoriesState
});
const mapDispatchToProps = {
  loadCategories: loadCategoriesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);