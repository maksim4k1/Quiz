import React from "react";
import styled from "styled-components";

const Content = styled.main`
  margin: 150px 0;
`;

function Main () {
  return(
    <Content>
      <div className="container">
        main page
      </div>
    </Content>
  );
}

export default Main;