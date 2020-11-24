import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton";
import Button from '../../Button';
import Divider from '../../Divider'
import AuthLogin from "../../authLogin"
import WelcomeComp from '../../Welcome'
import ElephantLogo from "../../Logo";
import BackButton from "../../BackButton";

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 80%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: space-between;

`;

const GenericWrapper = styled.View`
  width: 100%;
  align-items: center;
  height: ${props=>props.height ? props.height: "20%"};
  justify-content: space-around;
`;

const BackWrapper = styled.View`
  width: 100%;
`;

const SignupChoice = ({ history }) => {
  return (

      <Frame>

        <FullWrapper>
          <BackWrapper>
            <BackButton onPress={() => history.push("/login")}></BackButton>
          </BackWrapper>
          <GenericWrapper  height={"auto"}>
            <ElephantLogo Size={"150px"}></ElephantLogo>
            <WelcomeComp main={"Are you an"} fontSize={"48px"} Display={true} />
          </GenericWrapper>
          <GenericWrapper height={"45%"}>
          <Button fontSize={"32px"} maxHeight={"65px"} MaxWidth={"230px"} buttonText={"Educator"} />
          <TextComp text={"or"} fontSize={"28px"} />
          <Button fontSize={"32px"} maxHeight={"65px"} MaxWidth={"230px"} buttonText={"Caregiver"} onPress={()=> {
            history.push("/caregiversignup")
          }} />
          </GenericWrapper>
        </FullWrapper>
      </Frame>


  );
};

SignupChoice.defaultProps = {};

export default SignupChoice;
