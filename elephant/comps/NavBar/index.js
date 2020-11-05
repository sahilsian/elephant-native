import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image} from "react-native";

//in codesandbox I added the images to the same folder but still got an error

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
  align-items: center;
  justify-content: center;
`;

const NavBar = ({}) => {
  return (
      <MainDiv>
        {/* <Image src={('./NavBar/Home (2).png')} /> */}
        {/* <Image src="/Search (1).png"></Image>
        <Image src="/calender (1).png"></Image>
        <Image src="/Chat (1).png"></Image> */}
        <Text>Icons are Temporarily Removed</Text>
      </MainDiv>
  );
};

export default NavBar;
