import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import Link from "../Link";
=======
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";
>>>>>>> dev

const FooterElement = styled.footer`
  width: 100%;
  height: 80px;
<<<<<<< HEAD
  color: var(--color-white);
=======
  margin: auto 0 0;
>>>>>>> dev
  background: var(--color-darkblue);
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(NavLink)`
<<<<<<< HEAD
  font-size: 32px;
  font-weight: 600;
  color: inherit;
=======
  color: var(--color-white);
  font-size: 32px;
  font-weight: 600;
>>>>>>> dev
`;
const Navigation = styled.nav`
  display: flex;
  ${gap("50px")}
<<<<<<< HEAD
  font-size: 14px;
`;
const FooterLink = styled(Link)`
  color: var(--color-white);
`;

function Footer () {
=======
`;

function Footer ({isAuth}) {
>>>>>>> dev
  return(
    <FooterElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
<<<<<<< HEAD
          <FooterLink to="/">Главная</FooterLink>
          <FooterLink to="/">Профиль</FooterLink>
          <FooterLink to="/">Категории</FooterLink>
          <FooterLink to="/">Рейтинг игроков</FooterLink>
=======
          <AppLink to="/" color="var(--color-white)">Главная</AppLink>
          {
            isAuth
            ? <AppLink to="/profile" color="var(--color-white)">Профиль</AppLink>
            : <AppLink to="/signin" color="var(--color-white)">Авторизация</AppLink>
          }
          
          <AppLink to="/categories" color="var(--color-white)">Категории</AppLink>
          <AppLink to="/rating" color="var(--color-white)">Рейтинг игроков</AppLink>
>>>>>>> dev
        </Navigation>
      </Container>
    </FooterElement>
  );
}

<<<<<<< HEAD
export default Footer;
=======
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Footer);
>>>>>>> dev
