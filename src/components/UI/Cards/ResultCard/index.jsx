import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const CardElement = styled.div`
  width: 100%;
  padding: 20px 22px;
  border: 1px solid var(--color-gray);
  border-radius: 15px;
`;
const Question = styled.h4`
  margin: 0 0 15px;
  font-size: 18px;
  font-weight: 600;
`;
const Answers = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("10px")}
`;
const Answer = styled.div`
  &>span{
    width: 125px;
    margin: 0 20px 0 0;
    display: inline-block;
  }
  &>strong{
    font-weight: 600;
    color: var(--color-green);
  }
`;

function ResultCard ({rightAnswer, myAnswer, question}) {
  return(
    <CardElement>
      <Question>{question}</Question>
      <Answers>
        <Answer><span>Ваш ответ:</span> <strong style={myAnswer === rightAnswer ? {} : {color: "var(--color-red)"}}>{myAnswer}</strong></Answer>
        <Answer><span>Верный ответ:</span> <strong style={myAnswer === rightAnswer ? {} : {color: "var(--color-red)"}}>{rightAnswer}</strong></Answer>
      </Answers>
    </CardElement>
  );
}

export default ResultCard;