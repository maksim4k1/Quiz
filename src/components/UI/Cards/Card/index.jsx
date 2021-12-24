import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RightArrowIcon from "../../../../assets/icons/RightArrowIcon";
import { gap, max_lines } from "../../../../styles/mixins";

const CardElement = styled(NavLink)`
  max-width: 320px;
  width: 100%;
  height: 180px;
  padding: 20px 25px;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  background: var(--color-darkblue);
  border-radius: 15px;
  &:hover>div{
    padding: 0 20px 0 0;
  }
`;
const Title = styled.h3`
  color: var(--color-black);
  font-size: 22px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Description = styled.p`
  color: var(--color-white);
  font-size: 14px;
  ${max_lines(4)}
`;
const Link = styled.div`
  margin: auto 0 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  color: var(--color-blue);
  transition: all 0.5s;
  &>svg>g{
    fill: var(--color-white);
  }
`;

function Card ({title, description, link, fill}) {
  return(
    <CardElement to={link} style={{background: fill}}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link>
        <RightArrowIcon/>
      </Link>
    </CardElement>
  );
}

export default Card;