import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";
import Input from "../../Input";

const Container = styled.div`
  width: 100%;
  padding: 25px 22px;
  display: flex;
  flex-flow: column;
  ${gap("10px;")}
  border: 1px solid var(--color-gray);
  border-radius: 15px;
`;
const AnswersTitle = styled.h6`
  margin: 15px 0 0;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;
const Question = styled.div`
  display: flex;
  ${gap("5px")}
  font-size: 20px;
`;
const QuestionInput = styled(Input)`
  height: 100%;
  padding: 0 0 5px;
  font-size: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid var(--color-gray);
  transition: border-color 0.3s;
  &:focus{
    border-color: var(--color-black);
  }
`;
const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  ${gap("10px")}
  &>input[type="radio"]{
    width: 56px;
    display: block;
  }
`;
const AnswerInput = styled(Input)`
  width: 100%;
  height: 40px;
  padding: 0 15px;
`;

function CreateQuestionCard ({id, onChange}) {
  const [questionData, setQuestionData] = useState({
    question: "",
    answers: [
      {answer: "", isTrue: false},
      {answer: "", isTrue: false},
      {answer: "", isTrue: false},
      {answer: "", isTrue: false},
    ]
  });

  useEffect(() => {
    onChange((data) => {
      const newData = {...data};

      newData.questions[id] = questionData;

      return newData;
    });
  }, [questionData, id, onChange]);

  function onChangeHandler(event){
    const name = event.target.name;

    if(name === "question"){ // question
      setQuestionData((data) => ({
        ...data,
        [event.target.name]: event.target.value
      }));
    } else if(name === "answer_text"){ // answer
      const id = Number(event.target.id);

      const newQuestionData = {...questionData};
      newQuestionData.answers[id].answer = event.target.value;

      setQuestionData(newQuestionData);
    } else if(name === `answer_${id}_isTrue`){ // isTrue
      const id = Number(event.target.id.split("answer_")[1]);

      const newQuestionData = {...questionData, answers: questionData.answers.map((answer) => ({...answer, isTrue: false}))};
      newQuestionData.answers[id].isTrue = true;

      setQuestionData(newQuestionData);
    }
  }

  return(
    <Container>
      <Question>
        <span>{id + 1}.</span>
        <QuestionInput
          placeholder="Вопрос"
          name="question"
          value={questionData.question || ""}
          onChange={onChangeHandler}
        />
      </Question>

      <AnswersTitle><span>Варианты ответа:</span><span>Ответ</span></AnswersTitle>
      
      <AnswerContainer>
        <AnswerInput
          placeholder="Ответ №1"
          name="answer_text"
          value={questionData.answers[0].answer || ""}
          onChange={onChangeHandler}
          id="0"
        />
        <input
          type="radio"
          name={`answer_${id}_isTrue`}
          id="answer_0"
          onChange={onChangeHandler}
        />
      </AnswerContainer>
      <AnswerContainer>
        <AnswerInput
          placeholder="Ответ №2"
          name="answer_text"
          value={questionData.answers[1].answer || ""}
          onChange={onChangeHandler}
          id="1"
        />
        <input
          type="radio"
          name={`answer_${id}_isTrue`}
          id="answer_1"
          onChange={onChangeHandler}
        />
      </AnswerContainer>
      <AnswerContainer>
        <AnswerInput
          placeholder="Ответ №3"
          name="answer_text"
          value={questionData.answers[2].answer || ""}
          onChange={onChangeHandler}
          id="2"
        />
        <input
          type="radio"
          name={`answer_${id}_isTrue`}
          id="answer_2"
          onChange={onChangeHandler}
        />
      </AnswerContainer>
      <AnswerContainer>
        <AnswerInput
          placeholder="Ответ №4"
          name="answer_text"
          value={questionData.answers[3].answer || ""}
          onChange={onChangeHandler}
          id="3"
        />
        <input
          type="radio"
          name={`answer_${id}_isTrue`}
          id="answer_3"
          onChange={onChangeHandler}
        />
      </AnswerContainer>
    </Container>
  );
}

export default CreateQuestionCard;