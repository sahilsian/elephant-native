import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const P = styled.Text`
  font-family: Quicksand;
  font-weight: lighter;
  font-size: 18px;
  colour: black;
`;

export const Bio = ({ text }) => {
  return (
    <View>
      <P>{text}</P>
    </View>
  );
};

Bio.defaultProps = {
  text: "bio"
};

export default Bio;