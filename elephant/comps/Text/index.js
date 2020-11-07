import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const P = styled.Text`
  font-size: ${props=>props.fontsize ? props.fontsize : "16px"};
  color: #000;
  margin-top: ${props=>props.textmargin};
`;

const TextComp = ({ text, fontSize, Margin }) => {
  return (
    <View>
      <P textmargin={Margin} fontsize={fontSize}>{text}</P>
    </View>
  );
};

TextComp.defaultProps = {
  text: "This is a Sample Text Paragraph.",
  Margin: "0px"
};

export default TextComp;