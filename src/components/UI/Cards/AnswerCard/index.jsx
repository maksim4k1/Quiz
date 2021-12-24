import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const CardElement = styled.button`
  max-width: 320px;
  width: 100%;
  height: 160px;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${gap("10px")}
  color: var(--color-white);
  font-size: 22px;
  background: var(--color-darkblue);
  border-radius: 15px;
  transition: background 0.3s;
  &:hover{
    background: var(--color-darkblue-hover);
  }
  &:disabled{
    background: var(--color-gray);
  }
`;

function AnswerCard (props) {
  return(
    <CardElement {...props}>
      {props.children}
    </CardElement>
  );
}

export default AnswerCard;