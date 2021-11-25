import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  &::placeholder{
    color: var(--color-gray);
  }
`;

function Input (props) {
  return(
    <InputElement {...props} style={props.width ? {width: props.width} : {}} />
  );
}

export default Input;