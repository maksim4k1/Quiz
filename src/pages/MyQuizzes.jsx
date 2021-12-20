import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import randomColorGenerator from "../utils/randomColorGenerator";
import Content from "../components/Content";

function MyQuizzes () {
  return(
    <Content>
      <div className="container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {title: "Мои викторины"},
        ]}/>
        <Description title="Мои викторины" link="/myquizzes/create" linkText="Создать"/>
        <CardList>
          <Card title="Теорема Виетта" description="Викторина на умение находить корни уравнения через теорему Виетта и через дискриминант" link="/" fill={randomColorGenerator()}/>
        </CardList>
      </div>
    </Content>
  );
}

export default MyQuizzes;