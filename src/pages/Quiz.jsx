import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Button from "../components/UI/Buttons/Button";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
import { loadQuizAction } from "../redux/actions/quiz/loadQuizAction";
import { gap } from "../styles/mixins";
import Content from "../components/Content";
import InfoText from "../components/InfoText";

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

function Quiz ({quiz, quizInfo, loadQuiz, categories, categoriesInfo, loadCategories}) {
  const {id} = useParams();
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadQuiz(id);
  }, [id, loadQuiz]);

  useEffect(() => {
    if(!categories){
      loadCategories();
    }
    if(categories && quiz){
      setCategory(categories.find(category => category.id === quiz.category).title);
    }
  }, [categories, quiz, loadCategories]);

  return(
    <Content>
      <div className="container">
        {
          quizInfo.loading || categoriesInfo.loading
          ? <InfoText>Загрузка...</InfoText>
          : <Breadcrumbs road={[
            {link: `/categories`, title: "Категории"},
            quiz ? {link: `/category/${quiz.category}`, title: category} : null,
            {title: quiz ? quiz.name : "Текущая страница"}
          ]}/>
        }
        {
          quizInfo.loading || categoriesInfo.loading
          ? null
          : quizInfo.error
          ? <InfoText>{quizInfo.error}</InfoText>
          : quiz
          ? <>
            
            <Description
              title={quiz.name}
              description={quiz.description}
              style={{margin: 0}}
            />
            <Info>
              <p>Максимальное кол-во баллов: <strong>{quiz.questions.length}</strong></p>
              <p>Количество вопросов: <strong>{quiz.questions.length}</strong></p>
              <p>Категория: <strong>{category}</strong></p>
              <p>Автор: <strong>{quiz.author}</strong></p>
            </Info>
            <NavLink to={`/game/${id}`}><Button>Пройти</Button></NavLink>
          </>
          : null
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  quizInfo: state.quiz.quizState,
  categories: state.categories.categories,
  categoriesInfo: state.categories.categoriesState,
});
const mapDispatchToProps = {
  loadQuiz: loadQuizAction,
  loadCategories: loadCategoriesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);