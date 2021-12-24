import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Card from "../components/UI/Cards/Card";
import CardList from "../components/UI/Lists/CardList";
import randomColorGenerator from "../utils/randomColorGenerator";
import Content from "../components/Content";
import { connect } from "react-redux";
import InfoText from "../components/InfoText";
import { loadMyQuizzesAction } from "../redux/actions/myQuizzes/loadMyQuizzesAction";
import { useEffect } from "react";

function MyQuizzes ({profile, quizzes, info, loadQuizzes}) {
  useEffect(() => {
    if(profile){
      loadQuizzes(profile.myQuizzes)
    }
  }, [profile, loadQuizzes]);

  return(
    <Content>
      <div className="container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {title: "Мои викторины"},
        ]}/>
        <Description title="Мои викторины" link="/myquizzes/create" linkText="Создать"/>
        {
          info.loading
          ? <InfoText>Загрузка...</InfoText>
          : quizzes
          ? <CardList>
            {
              quizzes.map((quiz) => {
                return <Card key={quiz.id} title={quiz.title} description={quiz.description} link={`/myquiz/${quiz.id}`} fill={randomColorGenerator()}/>
              })
            }
          </CardList>
          : <InfoText>{info.error}</InfoText>
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  quizzes: state.myQuizzes.quizzes,
  info: state.myQuizzes.quizzesState,
});
const mapDispatchToProps = {
  loadQuizzes: loadMyQuizzesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes);