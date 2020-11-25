import React, {useState} from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import TextComp from "../Text";

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: ${props=>props.width ? props.width : "100%"};
    align-items: center;
    margin: 10px 0px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${props=>props.bgcolor};
    width: 30px;
    height: 30px;
    border-radius: 100px;
    margin-right: ${props=>props.marginRight ? props.marginRight : "20px"};
`;


const RadioButtons = ({ title, text, onPress, bgcolor, width, marginRight }) => {
  return (
      <Wrapper width={width}>
          <Button marginRight={marginRight} bgcolor={bgcolor} onPress={onPress}></Button>
          <TextComp text={text}></TextComp>
      </Wrapper>
  )
};

RadioButtons.defaultProps = {
    title: "Your Radio Buttons",
    text: "Radio Button Option",
};

export default RadioButtons;
