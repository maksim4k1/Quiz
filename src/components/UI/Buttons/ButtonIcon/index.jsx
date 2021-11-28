import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
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
    &>svg{
      fill: var(--color-black);
    }
  }
  &:disabled{
    color: var(--color-gray);
    border-color: var(--color-gray);
    background: var(--color-white);
  }
  &>svg{
    transition: fill 0.3s;
  }
`;

function ButtonIcon (props) {
  return(
    <ButtonElement style={props.padding ? {padding: props.padding} : {}} {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default ButtonIcon;