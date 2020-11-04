import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

const Container = styled.View`
  display: inline-flex;
  width: 100%;
  max-width: 200px;
  padding: 10px;
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;

  font-family: Quicksand;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.color ? "white" : "black")};

  justify-content: center;
  align-items: center;
`;

export const Interests = ({ width, text, bgcolor, color }) => {
  return (
    <Container color={color} width={width} bgcolor={bgcolor}>
      {text}
    </Container>
  );
};

Interests.defaultProps = {
  // width: "125px",
};

export default Interests;
