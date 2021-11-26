import React from "react";
import styled from "styled-components";

const Content = styled.main`
  margin: 100px 0 150px;
`;

function Profile () {
  return(
    <Content>
      <div className="container">
        profile page
      </div>
    </Content>
  );
}

export default Profile;