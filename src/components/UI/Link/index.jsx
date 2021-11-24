import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkElement = styled(NavLink)`
  color: var(--color-darkblue);
  font-weight: 600;
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
`;

function Link (props) {
  return(
    <LinkElement {...props} style={props.color ? {color: props.color} : {}}>
      {props.children}
    </LinkElement>
  );
}

export default Link;