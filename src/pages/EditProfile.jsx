import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Buttons/Button";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import camera_icon from "../assets/icons/camera-icon.svg";
import convertImageToBase64 from "../utils/convertImageToBae64";
import { connect } from "react-redux";
import LightButton from "../components/UI/Buttons/LightButton";
import { NavLink } from "react-router-dom";
import { gap } from "../styles/mixins";
import { editProfileAction } from "../redux/actions/auth/editProfileActions";

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

    editProfile(formData, () => {
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
      <Form className="form_container" onSubmit={editProfileHandler}>

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