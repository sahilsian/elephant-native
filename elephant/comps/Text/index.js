import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const P = styled.Text`
  font-size: ${props=>props.fontsize ? props.fontsize : "16px"};
  color: ${props=>props.color ? props.color : "#000"};
  margin-top: ${props=>props.textmargin};
  font-weight: ${props=>props.fontweight ? props.fontweight : "normal"};
  text-decoration: ${props=>props.decoration ? props.decoration : "none"};
  margin-right: ${props=>props.mright};
`;

const TextComp = ({ text, mright, fontSize, Margin, weight, color, decoration, numOfLines }) => {
  return (
      <P mright={mright} numberOfLines={numOfLines} textmargin={Margin} decoration={decoration} color={color} fontweight={weight} fontsize={fontSize}>{text}</P>
  );
};

TextComp.defaultProps = {
  text: "This is a Sample Text Paragraph.",
  Margin: "0px",
  weight: false,
  mright: "0px"
};

export default TextComp;