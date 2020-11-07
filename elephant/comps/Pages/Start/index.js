import React from "react";
import styled from "styled-components/native";
import Button from '../../Button'
import WelcomeComp from "../../Welcome";
import { Image } from "react-native";
import ElephantLogo from "../../Logo";

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 70%;
  align-items: center;
  justify-content: space-between;

`;

const TitleBody = styled.View`
  align-items: center;
  width: 100%;
`;

const Start = ({}) => {
  return (
      <Frame>
      <FullWrapper>
          <TitleBody>
          <ElephantLogo></ElephantLogo>
          <WelcomeComp></WelcomeComp>
          </TitleBody>
          <Button marginTop={"40px"} buttonText={"Start"}></Button>
          
      </FullWrapper>
      </Frame>

  );
};

Start.defaultProps = {};

export default Start;
