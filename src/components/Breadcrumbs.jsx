import React from "react";
import styled from "styled-components";
import HomePageIcon from "../assets/icons/HomePageIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";
import { gap } from "../styles/mixins";
import AppLink from "./UI/AppLink";

const Navigation = styled.nav`
  margin: 0 0 20px;
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

function Breadcrumbs ({road}) {
  return(
    <Navigation>
      <Link to="/"><HomePageIcon/></Link>
      {
        road && road.length
        ? road.map((item, index) => {
          return <>
            <RightArrowIcon/>
            <AppLink key={index} to={item.link}>{item.title}</AppLink>
          </>
        })
        : null
      }
    </Navigation>
  );
}

export default Breadcrumbs;