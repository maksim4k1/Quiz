import React from "react";
import styled from "styled-components";

const Text = styled.div`
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function InfoText ({children}) {
  return(
    <Text>
      {children}
    </Text>
  );
}

export default InfoText;