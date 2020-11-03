import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

const Container = styled.View`
  display: flex;
  width: 95px;
  height: 85px;
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;

  font-family: Quicksand;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.color ? "white" : "black")};

  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const SubCategories = ({ text, bgcolor, color }) => {
  return (
    <View>
      <Container color={color} bgcolor={bgcolor}>
        {text}
      </Container>
    </View>
  );
};

SubCategories.defaultProps = {
  // width: "125px",
};

export default SubCategories;
