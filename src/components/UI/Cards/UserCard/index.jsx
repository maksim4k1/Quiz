import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import user from "../../../../assets/images/user.png";

const CardElement = styled.div`
  width: 100%;
  heihgt: 55px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  ${gap("15px")}
  border: 1px solid var(--color-gray);
  border-radius: 15px;
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

function UserCard ({username, image, score}) {
  return(
    <CardElement>
      <Image src={image || user}/>
      <Username>{username}</Username>
      {
        score
        ? <Score>Score: <span>{score}</span></Score>
        : null
      }
    </CardElement>
  );
}

export default UserCard;