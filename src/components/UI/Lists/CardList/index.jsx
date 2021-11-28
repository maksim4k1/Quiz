import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const ListElement = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  ${gap("40px")}
`;

function CardList (props) {
  return(
    <ListElement {...props}>
      {
        props.children
      }
    </ListElement>
  );
}

export default CardList;