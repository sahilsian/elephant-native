import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

const Container = styled.View`
  width: auto;
  max-width: ${(props) => (props.maxwidth)};
  padding: 8px 14px;
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#AFD2E9")};
  border-radius: 10px;

  font-family: Quicksand;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.color ? "white" : "black")};

  justify-content: center;
  align-items: center;
`;

const InterestText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.color ? "white" : "black")};
`;


const Interests = ({ maxWidth, text, bgColor, color }) => {
  return (
    <Container color={color} maxwidth={maxWidth} bgcolor={bgColor}>
      <InterestText>{text}</InterestText>
    </Container>
  );
};

Interests.defaultProps = {
  maxWidth: "200px",
  text: "Sample Interest",
  bgColor: false,
  color: false
};

export default Interests;
