import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import { signInAction } from "../redux/actions/auth/signInAction";
import Content from "../components/Content";
import Error from "../components/UI/Error";

const RedirectLink = styled.div`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: 600;
`;

function SignIn ({info, signIn}) {
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

  function signInHandler(event){
    event.preventDefault();

    signIn(formData, () => {
      navigate("/");
    });
  }

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {title: "Авторизация"}
        ]}/>
        <Form title="Авторизация" onSubmit={signInHandler}>

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

          {
            info.error && info.failing
            ? <Error>{info.error}</Error>
            : null
          }
          <Button type="submit" disabled={info.loading}>{info.loading ? "Подождите..." : "Авторизация"}</Button>
          <RedirectLink>Вы не зарегестрированы? <AppLink to="/signup">Регистрация</AppLink></RedirectLink>
        </Form>
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  info: state.auth.signInState
});
const mapDispatchToProps = {
  signIn: signInAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);