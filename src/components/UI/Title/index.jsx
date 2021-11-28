import React from "react";
import styled from "styled-components";

const TitleElement = styled.h2`
  padding: 0 0 0 100px;
  position: relative;
  font-size: 36px;
  font-weight: 600;
  &::before{
    content: "";
    width: 80px;
    height: 4px;
    position: absolute;
    left: 0;
    top: 14px;
    background: var(--color-red);
  }
  &::after{
    content: "";
    width: 60px;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 14px;
    background: var(--color-red);
  }
`;

function Title (props) {
  return(
    <TitleElement>
      {props.children}
    </TitleElement>
  );
}

export default Title;