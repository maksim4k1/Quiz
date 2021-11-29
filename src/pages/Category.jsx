import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
import { findQuizAction } from "../redux/actions/quizzes/findQuizAction";
import { loadQuizzesAction } from "../redux/actions/quizzes/loadQuizzesAction";
import randomColorGenerator from "../utils/randomColorGenerator";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
const InfoText = styled.div`
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function Category ({categories, categoriesInfo, loadCategories, quizzes, foundQuizzes, findQuiz, quizzesInfo, loadQuizzes}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState({});
  const [searchValue, setSearchValue] = useState("");

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

    findQuiz(searchValue);
  }, [id, loadCategories, categories, navigate, quizzes, loadQuizzes, searchValue, findQuiz]);

  useEffect(() => {
    if(categories){
      loadQuizzes(id);
    }
  }, [categories, id, loadQuizzes]);

  function onChangeHandler(event){
    setSearchValue(event.target.value);
  }

  return(
    <Content>
      <Container className="container">
        <Breadcrumbs road={[
          {link: `/categories`, title: "Категории"},
          {link: `/category/${id}`, title: selectedCategory.title || "Текущая страница"}
        ]}/>
        {
          categoriesInfo.loading
          ? <InfoText>Подождите, идёт загрузка...</InfoText>
          : <>
            <Description
              title={selectedCategory.title}
              onChange={onChangeHandler}
              value={searchValue}
              description={selectedCategory.description}
            />
            {
              quizzesInfo.loading
              ? <InfoText>Подождите, идёт загрузка...</InfoText>
              : foundQuizzes && foundQuizzes.length
              ? <CardList>
                {
                  foundQuizzes.map(quiz => {
                    return <Card key={quiz.id} title={quiz.title} description={quiz.description} link={`/quiz/${quiz.id}`} fill={randomColorGenerator()}/>
                  })
                }
              </CardList>
              : <InfoText>Викторины не найдены</InfoText>
            }
          </>
        }
      </Container>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  categoriesInfo: state.categories.categoriesState,
  quizzes: state.quizzes.quizzes,
  foundQuizzes: state.quizzes.foundQuizzes,
  quizzesInfo: state.quizzes.quizzesState,
});
const mapDispatchToProps = {
  loadCategories: loadCategoriesAction,
  loadQuizzes: loadQuizzesAction,
  findQuiz: findQuizAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);