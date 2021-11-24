import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import Button from "../Buttons/Button";
import LightButton from "../Buttons/LightButton";

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  background: var(--color-white);
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(NavLink)`
  font-size: 32px;
  font-weight: 600;
  color: inherit;
`;
const Navigation = styled.nav`
  display: flex;
  ${gap("30px")}
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
          <NavLink to="/"><LightButton width="150px">Авторизация</LightButton></NavLink>
          <NavLink to="/"><Button width="150px">Регистрация</Button></NavLink>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

export default Header;