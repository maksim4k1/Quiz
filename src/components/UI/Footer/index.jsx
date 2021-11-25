import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

function Footer () {
  return(
    <FooterElement>
      <Container className="large_container">
        <Logo to="/">Quiz</Logo>
      </Container>
    </FooterElement>
  );
}

export default Footer;