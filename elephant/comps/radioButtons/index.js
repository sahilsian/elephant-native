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
    margin-left: ${props=>props.marginLeft ? props.marginLeft : "0px"};
`;


const RadioButtons = ({ title, mright, text, onPress, bgcolor, width, marginRight, marginLeft }) => {
  return (
      <Wrapper width={width}>
          <Button marginLeft={marginLeft} marginRight={marginRight} bgcolor={bgcolor} onPress={onPress}></Button>
          <TextComp mright={mright} text={text}></TextComp>
      </Wrapper>
  )
};

RadioButtons.defaultProps = {
    title: "Your Radio Buttons",
    text: "Radio Button Option",
};

export default RadioButtons;
