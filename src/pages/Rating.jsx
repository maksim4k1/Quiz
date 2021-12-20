import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import UserCard from "../components/UI/Cards/UserCard";
import UsersList from "../components/UI/Lists/UsersList";
import { gap } from "../styles/mixins";
import user from "../assets/images/user.png";
import { connect } from "react-redux";
import { loadRatingAction } from "../redux/actions/rating/loadRatingAction";
import { useEffect } from "react";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const Top = styled.div`
  margin: 0 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Place = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  ${gap("5px")}
  align-items: center;
  justify-content: flex-end;
  &::after{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    color: var(--color-white);
    font-size: 96px;
    font-weight: 900;
  }
`;
const FirstPlase = styled(Place)`
  &::after{
    content: "1";
    height: 190px;
    background: var(--color-red);
  }
`;
const SecondPlase = styled(Place)`
  &::after{
    content: "2";
    height: 140px;
    background: var(--color-blue);
  }
`;
const ThirdPlase = styled(Place)`
  &::after{
    content: "3";
    height: 120px;
    background: var(--color-yellow);
  }
`;
const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
  min-width: 80px;
  min-height: 80px;
  margin: 0 0 5px;
  border: none;
  border-radius: 50%;
  object-fit: cover;
`;
const Username = styled.h5`
  font-size: 20px;
`;
const Score = styled.div`
  &>span{
    color: var(--color-red);
  }
`;
const InfoText = styled.div`
  color: var(--color-text-gray);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function Rating ({rating, info, loadRating}) {
  useEffect(() => {
    loadRating();
  }, [loadRating]);

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {title: "Рейтинг игроков"}
        ]}/>
        {
          info.loading
          ? <InfoText>Загрузка...</InfoText>
          : rating
          ? <>
            <Top>
              <SecondPlase>
                <Image src={rating[1].image || user}/>
                <Username>{rating[1].username}</Username>
                <Score>Score: <span>{rating[1].score}</span></Score>
              </SecondPlase>
              <FirstPlase>
                <Image src={rating[0].image || user}/>
                <Username>{rating[0].username}</Username>
                <Score>Score: <span>{rating[0].score}</span></Score>
              </FirstPlase>
              <ThirdPlase>
                <Image src={rating[2].image || user}/>
                <Username>{rating[2].username}</Username>
                <Score>Score: <span>{rating[2].score}</span></Score>
              </ThirdPlase>
            </Top>
            <UsersList>
              {
                rating.map((user) => {
                  if(user.place > 3){
                    return <UserCard key={user.place} image={user.image} username={`${user.place}. ${user.username}`} score={String(user.score)}/>
                  }
                  return null
                })
              }
            </UsersList>
          </>
          : <InfoText>{info.error}</InfoText>
        }
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  rating: state.rating.rating,
  info: state.rating.ratingState,
});
const mapDispatchToProps = {
  loadRating: loadRatingAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);