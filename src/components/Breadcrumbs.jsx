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
const ThisPage = styled.p`
  display: inline-flex;
  align-items: center;
  ${gap("10px")}
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
`;

function Breadcrumbs ({road, className}) {
  return(
    <Navigation className={className}>
      <Link to="/"><HomePageIcon/></Link>
      {
        road && road.length
        ? road.map((item, index) => {
          if(item){
            return item.link
            ? <AppLink key={index} to={item.link}><RightArrowIcon/>{item.title}</AppLink>
            : <ThisPage key={index}><RightArrowIcon/>{item.title}</ThisPage>
          } else return null
        })
        : null
      }
    </Navigation>
  );
}

export default Breadcrumbs;