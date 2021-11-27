import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import camera_icon from "../assets/icons/camera-icon.svg";
import convertImageToBase64 from "../utils/convertImageToBae64";

const Content = styled.main`
  margin: 100px 0 150px;
`;
const ImageInputContainer = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  background-color: var(--color-darkblue);
  background-image: url(${camera_icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75px;
  border-radius: 50%;
  overflow: hidden;
`;
const ImageInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Error = styled.div`
  color: var(--color-red);
  font-size: 12px;
  font-weight: 600;
`;

function EditProfile () {
  const [formData, setFormData] = useState({});

  async function onChangeHandler(event){
    console.log(formData)
    if(event.target.name === "image"){
      const base64 = await convertImageToBase64(event.target.files[0]);

      setFormData((data) => ({
        ...data,
        [event.target.name]: base64
      }));
    } else{
      setFormData((data) => ({
        ...data,
        [event.target.name]: event.target.value
      }));
    }
  }

  return(
    <Content>
      <Form className="form_container">

        <ImageInputContainer style={formData.image ? {background: "none"} : {}}>
          <ImageInput
            name="image"
            type="file"
            accept="image/*"
            onChange={onChangeHandler}
          />
          {
            formData.image
            ? <Image src={formData.image} alt="Profile image"/>
            : null
          }
        </ImageInputContainer>

        <Input
          name="username"
          value={formData.username || ""}
          type="text"
          placeholder="Имя пользователя"
          onChange={onChangeHandler}
        />
        <Input
          name="name"
          value={formData.name || ""}
          type="text"
          placeholder="Ваше имя"
          onChange={onChangeHandler}
        />
        <Input
          name="description"
          value={formData.description || ""}
          type="text"
          placeholder="Описание"
          onChange={onChangeHandler}
        />

        <Button type="submit">Сохранить</Button>
        {
          "" && false
          ? <Error></Error>
          : null
        }
      </Form>
    </Content>
  );
}

export default EditProfile;