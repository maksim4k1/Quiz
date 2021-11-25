import React from "react";
import styled from "styled-components";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";

const Main = styled.div`
  margin: 150px 0;
`;
const RedirectLink = styled.div`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 600;
`;

function SignUp () {
  return(
    <Main>
      <div className="form_container">
        <Form title="Регистрация">
          <Input type="text" placeholder="Ваше имя"/>
          <Input type="text" placeholder="Имя пользователя"/>
          <Input type="password" placeholder="Пароль"/>
          <Input type="password" placeholder="Потвердите пароль"/>
          <Button>Регистрация</Button>
          <RedirectLink>Вы уже зарегистрированы? <AppLink to="/signin">Авторизация</AppLink></RedirectLink>
        </Form>
      </div>
    </Main>
  );
}

export default SignUp;