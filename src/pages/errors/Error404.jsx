import React from "react";
import styled from "styled-components";

const Content = styled.main`
  margin: 100px 0 150px;
`;

function Error404 () {
  return(
    <Content>
      <div className="container">
        errpr 404 page
      </div>
    </Content>
  );
}

export default Error404;