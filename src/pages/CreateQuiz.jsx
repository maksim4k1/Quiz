import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import CreateQuestionCard from "../components/UI/Cards/CreateQuestionCard";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import Switch from "../components/UI/Select";
import TextArea from "../components/UI/TextArea";
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

function CreateQuiz () {
  const [formData, setFormData] = useState({questions: []});
  const [questionsCount, setQuestionsCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const newQuestions = [];
    for(let i = 0; i <= questionsCount; i++){
      newQuestions.push(<CreateQuestionCard key={i} id={i} onChange={setFormData}/>);
    }
    setQuestions(newQuestions);
  }, [questionsCount]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }
  function onSubmitHandler(event){
    event.preventDefault();
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
            placeholder="Категория"
            options={[
              {title: "Математика", value: 0}
            ]}
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
          <Buttons>
            <Button type="submit">Сохранить</Button>
            <LightButton>Отменить</LightButton>
          </Buttons>
        </Form>
      </div>
    </Content>
  );
}

export default CreateQuiz;