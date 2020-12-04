import React from "react";
import styled, { css } from "styled-components/native";

import { View, Text, Image, TouchableOpacity} from "react-native";


const MainDiv = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
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
  elevation: 24;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  justify-content: space-around;
  
`;

const Img = styled.Image`
  flex: 1;
  aspectRatio: 0.6;
  resizeMode: contain;
  
`;

const NavBar = ({history, home, search, calendar, chat, account, homeicon, searchicon, calendaricon, accounticon}) => {
  return (
  
      <MainDiv >

        <TouchableOpacity onPress={home}><Img source={homeicon} /></TouchableOpacity>
        <TouchableOpacity onPress={search}><Img source={searchicon}></Img></TouchableOpacity>
        <TouchableOpacity onPress={calendar}><Img source={calendaricon}></Img></TouchableOpacity>
        <TouchableOpacity onPress={account}><Img source={accounticon}></Img></TouchableOpacity>
      </MainDiv>
  );
};

NavBar.defaultProps = {
  homeicon: require('../../assets/Home-disabled.png'),
  searchicon: require('../../assets/Search-disabled.png'),
  calendaricon: require('../../assets/calender-disabled.png'),
  accounticon: require('../../assets/User-disabled.png')

}

export default NavBar;
