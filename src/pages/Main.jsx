import React from "react";
<<<<<<< HEAD

function Main () {
  return(
    <div>
      
    </div>
=======
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Buttons/Button";
import background_image from "../assets/images/background.png";
import Content from "../components/Content";

const Container = styled.div`
  position: relative;
  &::before{
    content: "";
    width: 350px;
    height: 350px;
    display: block;
    position: absolute;
    top: 0;
    right: 15px;
    background-image: url(${background_image});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1
  }
`;
const Title = styled.h1`
  font-size: 48px;
  &>strong{
    font-weight: 900;
  }
`;
const SubTitle = styled.h2`
  margin: 10px 0 40px;
  color: var(--color-text-gray);
  font-size: 36px;
  font-weight: 900;
`;

function Main () {
  return(
    <Content>
      <Container className="container">
        <Title><strong>Quiz</strong> - викторины<br/>на любые темы!</Title>
        <SubTitle>Учись, играй, создавай!</SubTitle>
        <NavLink to="/categories">
          <Button>Викторины</Button>
        </NavLink>
      </Container>
    </Content>
>>>>>>> dev
  );
}

export default Main;