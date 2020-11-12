import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const SubHead = styled.Text`
  font-family: Quicksand;
  font-weight: normal;
  font-size: 24px;
  color: ${(props) => (props.color ? "#4D5061" : "#6C8DC3")};
`;

export const SubHeader = ({ text, color }) => {
  return (
    <View>
      <SubHead color={color}>{text}</SubHead>
    </View>
  );
};

SubHeader.defaultProps = {
  text: "SubHeader",
  color: "#4D5061"
};

export default SubHeader;