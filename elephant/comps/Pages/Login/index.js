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
  height: 85%;
  align-items: center;
  justify-content: space-between;

`;

const GenericWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const Login = ({}) => {
  return (

      <Frame>
        <FullWrapper>
          <GenericWrapper>
            <ElephantLogo Size={"150px"}></ElephantLogo>
            <WelcomeComp fontSize={"48px"} Display={true} />
          </GenericWrapper>
          <AuthLogin />
          <Divider MaxWidth={"138px"} />
          <GenericWrapper>
            <CustomInput placeholder={"Username"}/>
            <CustomInput placeholder={"Password"}/>
          </GenericWrapper>
          <Button buttonText={"Login"} />
          <TextComp Margin={"20px"} text={"Don’t have an account?"}></TextComp>
          <Button buttonText={"Sign Up"} />
        </FullWrapper>
      </Frame>


  );
};

Login.defaultProps = {};

export default Login;
