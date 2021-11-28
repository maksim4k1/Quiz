import React from "react";
import styled from "styled-components";
import { gap, max_lines } from "../../../../styles/mixins";
import AppLink from "../../AppLink";

const CardElement = styled.div`
  max-width: 320px;
  width: 100%;
  height: 180px;
  padding: 20px 25px;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  background: var(--color-darkblue);
  border-radius: 15px;
`;
const Title = styled.h3`
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
const Link = styled(AppLink)`
  margin: auto 0 0 auto;
  color: var(--color-blue);
`;

function Card ({title, description, link, fill}) {
  return(
    <CardElement style={{background: fill}}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link to={link}>Перейти</Link>
    </CardElement>
  );
}

export default Card;