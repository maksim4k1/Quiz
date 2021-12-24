import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import styled from "styled-components";
=======
import { connect } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOutAction } from "../../../redux/actions/auth/logOutAction";
>>>>>>> dev
import { gap } from "../../../styles/mixins";
import Button from "../Buttons/Button";
import LightButton from "../Buttons/LightButton";

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  background: var(--color-white);
<<<<<<< HEAD
=======
  box-shadow: 0 0 8px var(--color-gray);
>>>>>>> dev
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
  color: var(--color-black);
  font-size: 32px;
  font-weight: 600;
>>>>>>> dev
`;
const Navigation = styled.nav`
  display: flex;
  ${gap("30px")}
`;

<<<<<<< HEAD
function Header () {
=======
function Header ({isAuth, logOut}) {
  const location = useLocation();
  const navigate = useNavigate();

  function logOutHandler(){
    const isLogOut = window.confirm("Вы уверены что хотите выйти из аккаунта?");
    if(isLogOut){
      logOut();
      navigate("/");
    }
  }

>>>>>>> dev
  return(
    <HeaderElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
        <Navigation>
<<<<<<< HEAD
          <NavLink to="/"><LightButton width="150px">Авторизация</LightButton></NavLink>
          <NavLink to="/"><Button width="150px">Регистрация</Button></NavLink>
=======
          {
            isAuth
            ? location.pathname === "/profile"
            ? <LightButton width="150px" onClick={logOutHandler}>Выйти</LightButton>
            : <>
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
>>>>>>> dev
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

<<<<<<< HEAD
export default Header;
=======
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  logOut: logOutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
>>>>>>> dev
