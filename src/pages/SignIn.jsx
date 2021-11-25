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

function SignIn () {
  return(
    <Main>
      <div className="form_container">
        <Form title="Авторизация">
          <Input type="text" placeholder="Имя пользователя"/>
          <Input type="password" placeholder="Пароль"/>
          <Button>Авторизация</Button>
          <RedirectLink>Вы не зарегестрированы? <AppLink to="/signup">Регистрация</AppLink></RedirectLink>
        </Form>
      </div>
    </Main>
  );
}

export default SignIn;