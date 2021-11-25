import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  transition: border 0.3s,
              background 0.3s,
              color 0.3s;
  &:hover{
    border-color: var(--color-darkblue);
    background: var(--color-darkblue);
    color: var(--color-white);
  }
`;

function LightButton (props) {
  return(
    <ButtonElement style={props.width ? {width: props.width} : {}} {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default LightButton;