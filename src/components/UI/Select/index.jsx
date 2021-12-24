import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
`;
const SelectElement = styled.select`
  width: 100%;
  height: 50px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  appearance: none;
`;
const Arrow = styled.div`
  height: 100px;
  display: block;
  position: absolute;
  top: 23px;
  right: 18px;
  border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid var(--color-text-gray);
  pointer-events: none;
  z-index: 100;
`;

function Select (props) {
  return(
    <Container>
      <Arrow></Arrow>
      <SelectElement defaultValue="default" {...props}>
        <option value="default" disabled>{props.placeholder}</option>
        {
          props.options.map(({title, value}, index) => {
            return <option key={index} value={value}>{title}</option>
          })
        }
      </SelectElement>
    </Container>
  );
}

export default Select;