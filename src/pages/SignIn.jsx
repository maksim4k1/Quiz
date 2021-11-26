import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AppLink from "../components/UI/AppLink";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import { signInAction } from "../redux/actions/auth/signInActions";

const Main = styled.div`
  margin: 150px 0;
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

function SignIn ({info, signIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

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
    <Main>
      <div className="form_container">
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

          <Button type="submit" disabled={info.loading}>{info.loading ? "Подождите..." : "Авторизация"}</Button>
          {
            info.error && info.failing
            ? <Error>{info.error}</Error>
            : null
          }
          <RedirectLink>Вы не зарегестрированы? <AppLink to="/signup">Регистрация</AppLink></RedirectLink>
        </Form>
      </div>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  info: state.auth.signIn
});
const mapDispatchToProps = {
  signIn: signInAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);