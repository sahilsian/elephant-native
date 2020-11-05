import React from "react";
import styled from "styled-components/native";
import Button from '../../Button'
import WelcomeComp from "../../Welcome";
import { Image } from "react-native";

const Frame = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

const FullWrapper = styled.View`
  width: 90%;
  height: 60%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Elephant = styled.Image`
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
`;

const Start = ({}) => {
  return (
      <Frame>
      <FullWrapper>
          <Elephant source={require("../../../assets/elephant.png")}></Elephant>
          <WelcomeComp></WelcomeComp>
          <Button marginTop={"40px"} buttonText={"Start"}></Button>
      </FullWrapper>
      </Frame>

  );
};

Start.defaultProps = {};

export default Start;
