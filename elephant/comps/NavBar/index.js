import React from "react";
import styled, { css } from "styled-components/native";
import { View, Image, AppRegistry } from "react-native";

//in codesandbox I added the images to the same folder but still got an error

const MainDiv = styled.View`
  width: 400px;
  background-color: white;
  box-shadow: 2px 2px 5px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
`;

export const NavBar = ({}) => {
  return (
    <View>
      <MainDiv>
        hi
        <Image source={require('./NavBar/Home (2).png')} />
        {/* <Image src="/Search (1).png"></Image>
        <Image src="/calender (1).png"></Image>
        <Image src="/Chat (1).png"></Image> */}
      </MainDiv>
    </View>
  );
};

export default NavBar;
