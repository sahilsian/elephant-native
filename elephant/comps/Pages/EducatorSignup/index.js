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
  height: ${props=>props.height ? props.height: "40%"};
  justify-content: space-between;
`;

const EducatorSignup = ({}) => {
  return (

      <Frame>
        <FullWrapper>
        <GenericWrapper>

          <TextComp 
          text={"All Educators must complete a criminal record check before they are allowed to access elephant."}
          ></TextComp>
          <TextComp 
          text={"Below you will find the rescources necassry to complete a background check."}
          ></TextComp>
          <TextComp
          text={"Once the background check is complete, you will be asked to forward proof to elephant and your account will be created."}
          ></TextComp>
          <TextComp
          text={"Thank you for your cooperation!"}
          ></TextComp>

        </GenericWrapper>

        <Button MaxWidth={"120px"} buttonText={"Continue"}></Button>

        </FullWrapper>
      </Frame>


  );
};

EducatorSignup.defaultProps = {};

export default EducatorSignup;
