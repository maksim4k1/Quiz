import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 200px;
  height: 50px;
<<<<<<< HEAD
  display: flex;
  justify-content: center;
  align-items: center;
=======
  display: inline-flex;
  align-items: center;
  justify-content: center;
>>>>>>> dev
  color: var(--color-white);
  background: var(--color-darkblue);
  border: 1px solid var(--color-darkblue);
  border-radius: 15px;
<<<<<<< HEAD
  transition: all 0.3s;
  &:hover{
    color: var(--color-black);
    background: var(--color-white);
    border-color: var(--color-gray);
=======
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
>>>>>>> dev
  }
`;

function Button (props) {
  return(
<<<<<<< HEAD
    <ButtonElement {...props} style={props.width ? {width: props.width} : {}}>
=======
    <ButtonElement style={props.width ? {width: props.width} : {}} {...props}>
>>>>>>> dev
      {props.children}
    </ButtonElement>
  );
}

export default Button;