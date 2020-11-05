import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const P = styled.Text`
  font-size: ${props=>props.fontsize ? props.fontsize : "16px"};
  color: #000;
`;

const TextComp = ({ text, fontSize }) => {
  return (
    <View>
      <P fontsize={fontSize}>{text}</P>
    </View>
  );
};

TextComp.defaultProps = {
  text: "This is a Sample Text Paragraph."
};

export default TextComp;