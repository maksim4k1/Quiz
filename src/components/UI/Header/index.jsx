import React from "react";
import { connect } from "react-redux";
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
  color: var(--color-black);
  font-size: 32px;
  font-weight: 600;
`;
const Navigation = styled.nav`
  display: flex;
  ${gap("30px")}
`;

function Header ({isAuth}) {
  return(
    <HeaderElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
          {
            isAuth
            ? <>
              <NavLink to="/profile">
                <LightButton width="150px">Профиль</LightButton>
              </NavLink>
            </>
            : <>
              <NavLink to="/signin">
                <LightButton width="150px">Авторизация</LightButton>
              </NavLink>
              <NavLink to="/signup">
                <Button width="150px">Регистрация</Button>
              </NavLink>
            </>
          }
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Header);