import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const ListElement = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;

function UsersList (props) {
  return(
    <ListElement {...props}>
      {
        props.children
      }
    </ListElement>
  );
}

export default UsersList;