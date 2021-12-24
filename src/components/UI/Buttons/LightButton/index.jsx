<<<<<<< HEAD

import React from "react";
import styled from "styled-components";

const LightButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
=======
import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 200px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
>>>>>>> dev
  color: var(--color-black);
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
<<<<<<< HEAD
  transition: all 0.3s;
  &:hover{
    color: var(--color-white);
    background: var(--color-darkblue);
    border-color: var(--color-darkblue);
=======
  transition: border 0.3s,
              background 0.3s,
              color 0.3s;
  &:hover{
    border-color: var(--color-darkblue);
    background: var(--color-darkblue);
    color: var(--color-white);
  }
  &:disabled{
    color: var(--color-gray);
    border-color: var(--color-darkblue);
    background: var(--color-darkblue);
>>>>>>> dev
  }
`;

function LightButton (props) {
  return(
<<<<<<< HEAD
    <LightButtonElement {...props} style={props.width ? {width: props.width} : {}}>
      {props.children}
    </LightButtonElement>
=======
    <ButtonElement style={props.width ? {width: props.width} : {}} {...props}>
      {props.children}
    </ButtonElement>
>>>>>>> dev
  );
}

export default LightButton;