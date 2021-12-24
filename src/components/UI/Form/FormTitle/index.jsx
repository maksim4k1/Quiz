import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`;

function FormTitle (props) {
  return(
    <Title>
      {props.children}
    </Title>
  );
}

export default FormTitle;