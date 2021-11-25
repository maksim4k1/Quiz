import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";

const FooterElement = styled.footer`
  width: 100%;
  height: 80px;
  margin: auto 0 0;
  background: var(--color-darkblue);
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(NavLink)`
  color: var(--color-white);
  font-size: 32px;
  font-weight: 600;
`;
const Navigation = styled.nav`
  display: flex;
  ${gap("50px")}
`;

function Footer () {
  return(
    <FooterElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
          <AppLink to="/" color="var(--color-white)">Главная</AppLink>
          <AppLink to="/" color="var(--color-white)">Профиль</AppLink>
          <AppLink to="/" color="var(--color-white)">Категории</AppLink>
          <AppLink to="/" color="var(--color-white)">Рейтинг игроков</AppLink>
        </Navigation>
      </Container>
    </FooterElement>
  );
}

export default Footer;