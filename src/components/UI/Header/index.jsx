import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

function Header () {
  return(
    <HeaderElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
      </Container>
    </HeaderElement>
  );
}

export default Header;