import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
import ButtonIcon from "./UI/Buttons/ButtonIcon";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Title from "./UI/Title";
import { gap } from "../styles/mixins";

const Navigation = styled.div`
  margin: 0 0 40px;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: space-between;
  ${gap("20px")}
`;
const SearchFrom = styled(Form)`
  margin: 0 0 0 auto;
  flex-flow: row;
  ${gap("10px")}
`;
const DescriptionElement = styled.p`
  max-width: 500px;
  color: var(--color-text-gray);
`;

function Description ({title, onChange, value, description}) {
  return(
    <Navigation>
      <Title>{title}</Title>
      {
        onChange
        ? <SearchFrom onSubmit={(event) => event.preventDefault()}>
          <Input
            type="text"
            name="search"
            value={value}
            width="300px"
            placeholder="Поиск"
            onChange={onChange}
          />
          <ButtonIcon type="submit" padding="8px"><SearchIcon/></ButtonIcon>
        </SearchFrom>
        : null
      }
      {
        description
        ? <div style={{width: "100%"}}><DescriptionElement>{description}</DescriptionElement></div>
        : null
      }
    </Navigation>
  );
}

export default Description;