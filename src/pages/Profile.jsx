import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CameraIcon from "../assets/icons/CameraIcon";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/UI/Buttons/Button";
import LightButton from "../components/UI/Buttons/LightButton";
import { gap } from "../styles/mixins";
import Content from "../components/Content";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
const User = styled.div`
  margin: 0 0 40px;
  display: flex;
  ${gap("40px")}
`;
const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-darkblue);
  border-radius: 50%;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 50%;
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
        <Breadcrumbs road={[
          {title: "Профиль"}
        ]}/>
        {
          profile
          ? <User>
            <ImageContainer style={profile.image ? {background: "none"} : {}}>
              {
                profile.image
                ? <Image src={profile.image} alt="Profile image"/>
                : <CameraIcon width="100"/>
              }
            </ImageContainer>
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
          <NavLink to="/myquizzes">
            <Button width="300px">Мои викторины</Button>
          </NavLink>
          <NavLink to="/profile/edit">
            <LightButton width="400px">Редактировать профиль</LightButton>
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