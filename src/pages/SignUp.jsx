import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import { signUpAction } from "../redux/actions/auth/signUpActions";

const Main = styled.div`
  margin: 150px 0;
`;
const RedirectLink = styled.div`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 600;
`;

function SignUp ({signUp}) {
  const navigate = useNavigate();
  
  function signUpHandler(event){
    event.preventDefault();

    signUp();
    navigate("/");
  }

  return(
    <Main>
      <div className="form_container">
        <Form title="Регистрация" onSubmit={signUpHandler}>
          <Input type="text" placeholder="Ваше имя"/>
          <Input type="text" placeholder="Имя пользователя"/>
          <Input type="password" placeholder="Пароль"/>
          <Input type="password" placeholder="Потвердите пароль"/>
          <Button type="submit">Регистрация</Button>
          <RedirectLink>Вы уже зарегистрированы? <AppLink to="/signin">Авторизация</AppLink></RedirectLink>
        </Form>
      </div>
    </Main>
  );
}

const mapDispatchToProps = {
  signUp: signUpAction
};

export default connect(null, mapDispatchToProps)(SignUp);