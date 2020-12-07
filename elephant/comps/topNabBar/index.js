import React, {useContext, useState} from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import TextComp from "../Text";
import {MyContext} from "../context";


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

const Wrapper = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Dropdown = styled.View`
  width: 250px;
  height: 70px;
  position: absolute;
  background-color: #4D5061;
  top: -300px;
  right: 15px;
  elevation: 10;
  shadowColor: #000;
  border-radius: 10px;
  justify-content: center;
  align-items: flex-end;
`;


const Img = styled.Image`
  flex: 1;
  aspectRatio: 0.5;
  resizeMode: contain;
  margin-right: 5%;
`;


const TopNavBar = ({Shadow, history, onPress, Logout}) => {
  return (
      <MainDiv shadow={Shadow}>
        <Wrapper>
          <Dropdown>
            <TouchableOpacity>
            <TextComp text={"Logout"} mright={"30px"} color={"#fff"} fontSize={"24px"}></TextComp>
            </TouchableOpacity>
          </Dropdown>
        <TouchableOpacity onPress={onPress}>
          <Img source={require('../../assets/settings.png')} />
        </TouchableOpacity>
        </Wrapper>
      </MainDiv>
  );
};

export default TopNavBar;
