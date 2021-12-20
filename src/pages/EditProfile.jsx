import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import convertImageToBase64 from "../utils/convertImageToBase64";
import { connect } from "react-redux";
import LightButton from "../components/UI/Buttons/LightButton";
import { NavLink } from "react-router-dom";
import { gap } from "../styles/mixins";
import { editProfileAction } from "../redux/actions/auth/editProfileAction";
import CameraIcon from "../assets/icons/CameraIcon";
import Breadcrumbs from "../components/Breadcrumbs";
import Content from "../components/Content";

const ImageInputContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  position: relative;
  background-color: var(--color-darkblue);
  border-radius: 50%;
  overflow: hidden;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover{
    &::before{
      opacity: 1;
    }
  }
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
const Buttons = styled.div`
  display: flex;
  ${gap("30px")}
`;
const Error = styled.div`
  color: var(--color-red);
  font-size: 12px;
  font-weight: 600;
`;

function EditProfile ({profile, info, editProfile}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(profile ? profile : {});

  useEffect(() => {
    info.error = "";
  }, [info])

  function editProfileHandler(event){
    event.preventDefault();

    editProfile({...formData, username: profile.username}, () => {
      navigate("/profile");
    })
  }

  async function onChangeHandler(event){
    const image = event.target.name === "image" ? await convertImageToBase64(event.target.files[0]) : null;

    setFormData((data) => ({
      ...data,
      [event.target.name]: image ? image : event.target.value
    }));
    info.error = "";
  }

  return(
    <Content>
      <div className="form_container">
        <Breadcrumbs road={[
          {link: "/profile", title: "Профиль"},
          {title: "Редактировать профиль"},
        ]}/>
        <Form onSubmit={editProfileHandler}>

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
              : <CameraIcon width="75"/>
            }
          </ImageInputContainer>
          <LightButton width="250px" onClick={() => setFormData((data) => ({...data, image: ""}))} type="button">Удалить фотографию</LightButton>

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

          <Buttons>
            <Button type="submit" disabled={info.loading}>Сохранить</Button>
            <NavLink to="/profile">
              <LightButton type="reset" disabled={info.loading}>Не сохранять</LightButton>
            </NavLink>
          </Buttons>
          {
            info.error && info.failing
            ? <Error>{info.error}</Error>
            : null
          }
        </Form>
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  info: state.auth.profileState
});
const mapDispatchToProps = {
  editProfile: editProfileAction
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);