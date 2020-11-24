import React from "react";
import styled, { css } from "styled-components/native";

import { View, Text, Image, TouchableOpacity} from "react-native";


const MainDiv = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 68px;
  shadowColor: #000;
  shadowOffset: {
    width: 0;
    height: 12;
  }
  shadowOpacity: 0.58;
  shadowRadius: 16.00;
  elevation: 24;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-around;
`;

const NavBar = ({history}) => {
  return (
      <MainDiv>

        <TouchableOpacity onPress={() => {
          history.push("/home")
        }}><Image source={require('../../assets/Home.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../assets/Search.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../assets/calender.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../assets/Chat.png')}></Image></TouchableOpacity>
      </MainDiv>
  );
};

export default NavBar;
