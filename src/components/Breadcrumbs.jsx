import React from "react";
import styled from "styled-components";
import HomePageIcon from "../assets/icons/HomePageIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";
import { gap } from "../styles/mixins";
import AppLink from "./UI/AppLink";

const Navigation = styled.nav`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${gap("10px")}
`;
const Link = styled(AppLink)`
  &>svg>g{
    transition: fill 0.3s;
  }
  &:hover{
    &>svg>g{
      fill: var(--color-darkblue);
    }
  }
`;

function Breadcrumbs ({road, className}) {
  return(
    <Navigation className={className}>
      <Link to="/"><HomePageIcon/></Link>
      {
        road && road.length
        ? road.map((item, index) => {
          return <AppLink key={index} to={item.link}><RightArrowIcon/>{item.title}</AppLink>
        })
        : null
      }
    </Navigation>
  );
}

export default Breadcrumbs;