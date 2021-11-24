import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background: var(--color-darkblue);
  border: 1px solid var(--color-darkblue);
  border-radius: 15px;
  transition: all 0.3s;
  &:hover{
    color: var(--color-black);
    background: var(--color-white);
    border-color: var(--color-gray);
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props} style={props.width ? {width: props.width} : {}}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;