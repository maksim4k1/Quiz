import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: var(--color-darkblue);
  border: 1px solid var(--color-darkblue);
  border-radius: 15px;
  transition: border 0.3s,
              background 0.3s,
              color 0.3s;
  &:hover{
    border-color: var(--color-gray);
    background: var(--color-white);
    color: var(--color-black);
  }
  &:disabled{
    color: var(--color-gray);
    border-color: var(--color-gray);
    background: var(--color-white);
  }
`;

function Button (props) {
  return(
    <ButtonElement style={props.width ? {width: props.width} : {}} {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;