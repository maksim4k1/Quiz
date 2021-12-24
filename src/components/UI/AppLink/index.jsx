import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const LinkElement = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  ${gap("10px")}
  color: var(--color-darkblue);
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  &:hover{
    text-decoration: none; 
  }
`;

function AppLink (props) {
  return(
    <LinkElement style={props.color ? {color: props.color} : {}} {...props}>
      {props.children}
    </LinkElement>
  );
}

export default AppLink;