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
`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
const StartoutPage = ({}) => {
  return (
      <ScrollView style={{width: "100%", height: "100%"}}>

      <Frame>
      <FullWrapper>
      <TextWrapper>
        <TextComp fontSize={"20px"} text={"You can write some text here."}></TextComp>
      </TextWrapper>
        <NextButton></NextButton>
      </FullWrapper>
      </Frame>
      </ScrollView>


  );
};

StartoutPage.defaultProps = {};

export default StartoutPage;
