import React from "react";
import styled from "styled-components";

const ErrorComponent = styled.div`
  color: var(--color-red);
  font-size: 12px;
  font-weight: 600;
`;

function Error ({children}) {
  return(
    <ErrorComponent>
      {children}
    </ErrorComponent>
  );
}

export default Error;