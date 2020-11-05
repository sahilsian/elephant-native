import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"

const Frame = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
  justify-content: center;
`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 80%;
  justify-content: space-between
`;

const Login = ({}) => {
  return (

      <Frame>
        <FullWrapper>

        </FullWrapper>
      </Frame>


  );
};

Login.defaultProps = {};

export default Login;
