import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import { signUpSuccessAction } from "../redux/actions/auth/signUpActions";

const Main = styled.div`
  margin: 150px 0;
`;
const RedirectLink = styled.div`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 600;
`;

function SignIn ({signIn}) {
  function signInHandler(event){
    event.preventDefault();
    signIn()
  }

  return(
    <Main>
      <div className="form_container">
        <Form title="Авторизация" onSubmit={signInHandler}>
          <Input type="text" placeholder="Имя пользователя"/>
          <Input type="password" placeholder="Пароль"/>
          <Button type="submit">Авторизация</Button>
          <RedirectLink>Вы не зарегестрированы? <AppLink to="/signup">Регистрация</AppLink></RedirectLink>
        </Form>
      </div>
    </Main>
  );
}

const mapDispatchToProps = {
  signIn: signUpSuccessAction
};

export default connect(null, mapDispatchToProps)(SignIn);