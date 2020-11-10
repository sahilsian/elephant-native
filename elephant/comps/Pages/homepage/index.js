import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Categories from "../../Categories";

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

const ScrollDiv = styled.ScrollView`
    width: 100%;
    height: 100%;
    flex: 1;

`;

const ScrollContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

`;

const HomeCategories = styled.View`
    width: 80%;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`;

const HomePage = ({}) => {

    const [shadow, setShadow] = useState(false)

    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

  return (
    <Frame>
    <TopNavBar Shadow={shadow}></TopNavBar>
    <NavBar></NavBar>   

        <Content>
            <ScrollDiv  contentContainerStyle={{flexGrow: 1}} style={{width: "100%", height: "100%"}}>
                <ScrollContainer >
                    <HomeCategories>
                        <Categories></Categories>
                        <Categories></Categories>
                        <Categories></Categories>
                        <Categories></Categories>
                        <Categories></Categories>
                        <Categories></Categories>

                    </HomeCategories>
                </ScrollContainer>
            </ScrollDiv>
        </Content>

    </Frame>



  );
};

HomePage.defaultProps = {};

export default HomePage;
