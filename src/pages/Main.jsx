import React from "react";
import styled from "styled-components";

const Content = styled.main`
  margin: 100px 0 150px;
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