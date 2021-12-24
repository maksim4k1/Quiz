import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CameraIcon from "../assets/icons/CameraIcon";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";
import InfoText from "../components/InfoText";
import { loadUserProfileAction } from "../redux/actions/rating/loadUserProfileAction";
import { gap } from "../styles/mixins";

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

function UserProfile ({userProfile, info, loadUserProfile}) {
  const {username} = useParams();

  useEffect(() => {
    loadUserProfile(username);
  }, [username, loadUserProfile]);

  return(
    <Content>
      <Container className="small_container">
        <Breadcrumbs road={[
          {title: userProfile ? `${userProfile.username}` : "Профиль"}
        ]}/>
        {
          info.loading
          ? <InfoText>Загрузка...</InfoText>
          : userProfile
          ? <User>
            <ImageContainer style={userProfile.image ? {background: "none"} : {}}>
              {
                userProfile.image
                ? <Image src={userProfile.image} alt="Profile image"/>
                : <CameraIcon width="100"/>
              }
            </ImageContainer>
            <UserInfo>
              <Score><strong>{userProfile.score}</strong> баллов</Score>
              <Username>{userProfile.username}</Username>
              <Name>{userProfile.name}</Name>
              <Description>{userProfile.description}</Description>
            </UserInfo>
          </User>
          : <InfoText>{info.error}</InfoText>
        }
      </Container>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  userProfile: state.rating.userProfile,
  info: state.rating.userProfileState,
});
const mapDispatchToProps = {
  loadUserProfile: loadUserProfileAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);