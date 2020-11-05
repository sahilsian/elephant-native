import React from "react";
import styled, { css } from "styled-components/native";
import { View, Image } from "react-native";

const MainDiv = styled.View`
  width: 400px;
  background-color: white;
  box-shadow: 2px 2px 5px gray;
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

export const NavBar = ({}) => {
  return (
    <View>
      <MainDiv>
        <Images source={require("./Home.png")} resizeMode="cover" />
        <Images source={require("./Search.png")} resizeMode="cover" />
        <Images source={require("./calender.png")} resizeMode="cover" />
        <Images source={require("./Chat.png")} resizeMode="cover" />
      </MainDiv>
    </View>
  );
};

export default NavBar;
