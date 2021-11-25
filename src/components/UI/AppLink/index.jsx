import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkElement = styled(NavLink)`
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