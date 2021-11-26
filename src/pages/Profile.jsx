import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import { gap } from "../styles/mixins";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("40px")}
`;
const User = styled.div`
  display: flex;
  ${gap("40px")}
`;
const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--color-darkblue);
  object-fit: cover;
`;
const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;
const Score = styled.div`
  font-size: 20px;
  text-align: end;
  &>strong{
    color: var(--color-red);
    font-weight: 600;
  }
`;
const Username = styled.h3`
  margin: 0 0 10px;
  font-size: 48px;
  font-weight: 600;
`;
const Name = styled.h5`
  font-size: 24px;
  margin: 0 0 20px;
`;
const Description = styled.p`
  color: var(--color-text-gray);
`;
const Navigation = styled.nav`
  min-width: 100%;
  display: flex;
  ${gap("40px")}
`;

function Profile ({profile}) {
  return(
    <Content>
      <Container className="small_container">
        {
          profile
          ? <User>
            {
              profile.image
              ? <Image src={profile.image}/>
              : <Image/>
            }
            <UserInfo>
              <Score><strong>{profile.score}</strong> баллов</Score>
              <Username>{profile.username}</Username>
              <Name>{profile.name}</Name>
              <Description>{profile.description}</Description>
            </UserInfo>
          </User>
          : null
        }
        <Navigation>
          <NavLink to="/">
            <LightButton width="300px">Редактировать профиль</LightButton>
          </NavLink>
          <NavLink to="/">
            <Button width="400px">Мои викторины</Button>
          </NavLink>
        </Navigation>
      </Container>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

export default connect(mapStateToProps)(Profile);