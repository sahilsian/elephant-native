import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";

const Frame = styled.View`
  width: 100%;
  align-items: center;
  position: relative;
  height: 100%;
  justify-content: center;
`;

const Content = styled.View`
    width: 100%;
    height: 82%;
`;

const Test = styled.View`
    width: 60px;
    height: 60px;
    background-color: #fad;
    margin: 2px;
`;

const ScrollDiv = styled.ScrollView`
    width: 100%;
    height: 100%;
`;

const ScrollContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

const MainTemplate = ({}) => {
  return (
    <Frame>
    <TopNavBar></TopNavBar>
    <NavBar></NavBar>   

        <Content>
            <ScrollDiv style={{width: "100%", height: "100%"}}>
                <ScrollContainer>
                    
                </ScrollContainer>
            </ScrollDiv>
        </Content>

    </Frame>



  );
};

MainTemplate.defaultProps = {};

export default MainTemplate;
