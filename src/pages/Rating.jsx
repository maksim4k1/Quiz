import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import UserCard from "../components/UI/Cards/UserCard";
import UsersList from "../components/UI/Lists/UsersList";
import { gap } from "../styles/mixins";
import user from "../assets/images/user.png";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Top = styled.div`
  margin: 0 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Place = styled.div`
  height: 330px;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  align-items: center;
  justify-content: flex-end;
  &::after{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    color: var(--color-white);
    font-size: 96px;
    font-weight: 900;
  }
`;
const FirstPlase = styled(Place)`
  &::after{
    content: "1";
    height: 210px;
    background: var(--color-red);
  }
`;
const SecondPlase = styled(Place)`
  &::after{
    content: "2";
    height: 160px;
    background: var(--color-blue);
  }
`;
const ThirdPlase = styled(Place)`
  &::after{
    content: "3";
    height: 130px;
    background: var(--color-yellow);
  }
`;
const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
  min-width: 80px;
  min-height: 80px;
  border: none;
  border-radius: 50%;
  background: var(--color-darkblue);
`;
const Username = styled.h5`
  font-size: 20px;
`;

function Rating () {
  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {title: "Рейтинг игроков"}
        ]}/>
        <Top>
          <SecondPlase>
            <Image src={user}/>
            <Username>Username</Username>
          </SecondPlase>
          <FirstPlase>
            <Image src={user}/>
            <Username>Username</Username>
          </FirstPlase>
          <ThirdPlase>
            <Image src={user}/>
            <Username>Username</Username>
          </ThirdPlase>
        </Top>
        <UsersList>
          <UserCard username="4. User Name"/>
          <UserCard username="5. User Name"/>
          <UserCard username="6. User Name"/>
        </UsersList>
      </div>
    </Content>
  );
}

export default Rating;