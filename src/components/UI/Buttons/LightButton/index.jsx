
import React from "react";
import styled from "styled-components";

const LightButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  transition: all 0.3s;
  &:hover{
    color: var(--color-white);
    background: var(--color-darkblue);
    border-color: var(--color-darkblue);
  }
`;

function LightButton (props) {
  return(
    <LightButtonElement {...props} style={props.width ? {width: props.width} : {}}>
      {props.children}
    </LightButtonElement>
  );
}

export default LightButton;