import React from "react";
import styled, { css } from "styled-components/native";
import { View, Image } from "react-native";

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
  justify-content: space-between;
  padding: 15px 15px 15px 15px;
`;

const Images = styled.Image`
  width: 50;
  height: 50;
`;

const NavBar = ({}) => {
  return (
      <MainDiv>
        <Images source={require("./Home.png")} resizeMode="cover" />
        <Images source={require("./Search.png")} resizeMode="cover" />
        <Images source={require("./calender.png")} resizeMode="cover" />
        <Images source={require("./Chat.png")} resizeMode="cover" />
      </MainDiv>
  );
};

export default NavBar;
