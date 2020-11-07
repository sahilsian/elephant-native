import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const P = styled.Text`
  font-size: ${props=>props.fontsize ? props.fontsize : "16px"};
  color: #000;
  margin-top: ${props=>props.textmargin};
  font-weight: ${props=>props.fontweight ? props.fontweight : "normal"};
`;

const TextComp = ({ text, fontSize, Margin, weight }) => {
  return (
    <View>
      <P textmargin={Margin} fontweight={weight} fontsize={fontSize}>{text}</P>
    </View>
  );
};

TextComp.defaultProps = {
  text: "This is a Sample Text Paragraph.",
  Margin: "0px",
  weight: false
};

export default TextComp;