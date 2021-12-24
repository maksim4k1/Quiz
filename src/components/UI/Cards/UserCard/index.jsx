import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import user from "../../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const CardElement = styled(NavLink)`
  width: 100%;
  heihgt: 55px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  ${gap("15px")}
  color: var(--color-black);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  background: var(--color-white);
  transition: all 0.3s;
  &:hover {
    background: var(--color-gray);
  }
`;
const Image = styled.img`
  max-width: 35px;
  max-height: 35px;
  min-width: 35px;
  min-height: 35px;
  border: none;
  border-radius: 50%;
  object-fit: cover;
`;
const Username = styled.h6`
  font-size: 18px;
`;
const Score = styled.div`
  margin: 0 0 0 auto;
  &>span{
    color: var(--color-red);
  }
`;

function UserCard ({place, username, image, score, scoreFill}) {
  return(
    <CardElement to={`/profile/${username}`}>
        <Image src={image || user}/>
        <Username>{place}. {username}</Username>
        {
          score
          ? <Score>Score: <span style={scoreFill ? {color: scoreFill} : null}>{score}</span></Score>
          : null
        }
    </CardElement>
  );
}

export default UserCard;