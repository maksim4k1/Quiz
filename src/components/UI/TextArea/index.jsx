import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const TextAreaElement = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 50px;
  max-height: 200px;
  height: 50px;
  padding: 15px 22px 0;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  &::placeholder{
    color: var(--color-gray);
  }
`;

function TextArea (props) {
  return(
    <Container>
      <TextAreaElement {...props}></TextAreaElement>
    </Container>
  );
}

export default TextArea;