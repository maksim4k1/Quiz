import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import { signUpAction } from "../redux/actions/auth/signUpAction";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const RedirectLink = styled.div`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 600;
`;
const Error = styled.div`
  color: var(--color-red);
  font-size: 12px;
  font-weight: 600;
`;

function SignUp ({info, signUp}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    info.error = "";
  }, [info])

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
    info.error = ""
  }
  
  function signUpHandler(event){
    event.preventDefault();

    signUp(formData, () => {
      navigate("/");
    });
  }

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {title: "Регистрация"}
        ]}/>
        <Form title="Регистрация" onSubmit={signUpHandler}>

          <Input
            name="name"
            value={formData.name || ""}
            type="text"
            placeholder="Ваше имя"
            onChange={onChangeHandler}
          />
          <Input
            name="username"
            value={formData.username || ""}
            type="text"
            placeholder="Имя пользователя"
            onChange={onChangeHandler}
          />
          <Input
            name="password"
            value={formData.password || ""}
            type="password"
            placeholder="Пароль"
            onChange={onChangeHandler}
          />
          <Input
            name="confirm_password"
            value={formData.confirm_password || ""}
            type="password"
            placeholder="Потвердите пароль"
            onChange={onChangeHandler}
          />

          <Button type="submit" disabled={info.loading}>{info.loading ? "Подождите..." : "Регистрация"}</Button>
          {
            info.error && info.failing
            ? <Error>{info.error}</Error>
            : null
          }
          <RedirectLink>Вы уже зарегистрированы? <AppLink to="/signin">Авторизация</AppLink></RedirectLink>
        </Form>
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  info: state.auth.signUpState
});
const mapDispatchToProps = {
  signUp: signUpAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);