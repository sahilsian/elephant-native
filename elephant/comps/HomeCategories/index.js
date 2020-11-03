import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

const Container = styled.View`
  display: flex;
  width: ${(props) => (props.width ? "160px" : "125px")};
  height: 125px;
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;

  font-family: Quicksand;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.color ? "white" : "black")};

  justify-content: center;
  align-items: center;
`;

export const Categories = ({ width, text, bgcolor, color }) => {
  return (
    <View>
      <Container color={color} width={width} bgcolor={bgcolor}>
        {text}
      </Container>
    </View>
  );
};

Categories.defaultProps = {
  // width: "125px",
};

export default Categories;