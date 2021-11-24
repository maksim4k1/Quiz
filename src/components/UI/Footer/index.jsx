import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import Link from "../Link";

const FooterElement = styled.footer`
  width: 100%;
  height: 80px;
  color: var(--color-white);
  background: var(--color-darkblue);
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
  ${gap("50px")}
  font-size: 14px;
`;
const FooterLink = styled(Link)`
  color: var(--color-white);
`;

function Footer () {
  return(
    <FooterElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
          <FooterLink to="/">Главная</FooterLink>
          <FooterLink to="/">Профиль</FooterLink>
          <FooterLink to="/">Категории</FooterLink>
          <FooterLink to="/">Рейтинг игроков</FooterLink>
        </Navigation>
      </Container>
    </FooterElement>
  );
}

export default Footer;