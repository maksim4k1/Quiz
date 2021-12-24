import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import FormTitle from "./FormTitle";

const FormElement = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("30px")}
`;

function Form (props) {
  return(
    <FormElement {...props}>
      {
        props.title
        ? <FormTitle>{props.title}</FormTitle>
        : null
      }
      {props.children}
    </FormElement>
  );
}

export default Form;