import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import CreateQuestionCard from "../components/UI/Cards/CreateQuestionCard";
import Error from "../components/UI/Error";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import Switch from "../components/UI/Select";
import TextArea from "../components/UI/TextArea";
import { loadCategoriesAction } from "../redux/actions/categories/loadCategoriesAction";
import { createQuizAction } from "../redux/actions/myQuizzes/createQuizAction";
import { gap } from "../styles/mixins";

const SubTitle = styled.h5`
  width: 100%;
  margin: 10px 0 0;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
`;
const Buttons = styled.div`
  display: flex;
  ${gap("25px")}
`;

function CreateQuiz ({categories, categoriesInfo, profile, createQuizInfo, loadCategories, createQuiz}) {
  const [formData, setFormData] = useState({author: profile ? profile.username : "", questions: []});
  const [questionsCount, setQuestionsCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const newQuestions = [];
    for(let i = 0; i <= questionsCount; i++){
      newQuestions.push(<CreateQuestionCard key={i} id={i} onChange={setFormData}/>);
    }
    setQuestions(newQuestions);
  }, [questionsCount]);
  
  useEffect(() => {
    if(!categories){
      loadCategories();
    }
    if(createQuizInfo.error){
      createQuizInfo.error = "";
    }
  }, [categories, loadCategories, createQuizInfo, formData]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }
  function onSubmitHandler(event){
    event.preventDefault();
    createQuiz(formData);
  }

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {link: "/myquizzes", title: "Мои викторины"},
          {title: "Создать викторину"},
        ]}/>
        <Form title="Викторина" onSubmit={onSubmitHandler}>
          
          <Input
            type="text"
            placeholder="Название викторины"
            name="name"
            value={formData.name || ""}
            onChange={onChangeHandler}
          />
          <Switch
            placeholder={categoriesInfo.loading ? "Загрузка..." : "Категория"}
            options={categories ? categories.map((category) => ({title: category.title, value: category.id})) : []}
            name="category"
            onChange={onChangeHandler}
          />
          <TextArea
            placeholder="Описание"
            name="description"
            value={formData.description || ""}
            onChange={onChangeHandler}
          />

          <SubTitle>Создание вопросов:</SubTitle>

          {questions}

          <Button type="button" onClick={() => setQuestionsCount(data => data + 1)}>Добавить вопрос</Button>
          {
            createQuizInfo.error && createQuizInfo.failing
            ? <Error>{createQuizInfo.error}</Error>
            : null
          }
          <Buttons>
            <Button type="submit" disabled={createQuizInfo.loading}>Сохранить</Button>
            <NavLink type="button" to="/myquizzes"><LightButton>Отменить</LightButton></NavLink>
          </Buttons>
        </Form>
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  categoriesInfo: state.categories.categoriesState,
  profile: state.auth.profile,
  createQuizInfo: state.myQuizzes.createQuizState,
});
const mapDispatchToProps = {
  loadCategories: loadCategoriesAction,
  createQuiz: createQuizAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);