import React from "react";
import styled from "styled-components";

const Main = styled.main`
  margin: 100px 0 150px;
`;

function Content ({children}) {
  return(
    <Main>
      {children}
    </Main>
  );
}

export default Content;