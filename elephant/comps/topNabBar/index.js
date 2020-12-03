import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image, TouchableHighlight, TouchableOpacity} from "react-native";

const MainDiv = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 55px;
  shadowColor: #000;
  shadowOffset: {
    width: 0;
    height: 12;
  }
  shadowOpacity: 0.58;
  shadowRadius: 16.00;
  elevation: ${props=>props.shadow ? "24" : "0"};
  background-color: #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  z-index: 2;
`;

const Img = styled.Image`
  flex: 1;
  aspectRatio: 0.5;
  resizeMode: contain;
  margin-right: 5%;
`;


const TopNavBar = ({Shadow, history, onPress}) => {
  return (
      <MainDiv shadow={Shadow}>
        <TouchableOpacity onPress={onPress}>
          <Img source={require('../../assets/settings.png')} />
        </TouchableOpacity>
      </MainDiv>
  );
};

export default TopNavBar;
