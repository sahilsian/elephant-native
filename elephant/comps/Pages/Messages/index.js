import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";

import ProfileName from '../../ProfileName';

const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;
`;

const AdjustedWidth = styled.View`
    width: 100%;
    flex: 0.81;
`;

const ItemContainer = styled.View`
    width: 80%;
    flex: 1;
    alignItems: center;
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-around;
`;

const Messages = ({}) => {

    const [shadow, setShadow] = useState(false)

  return (
    <Container>
        <TopNavBar Shadow={shadow}></TopNavBar>
        <NavBar></NavBar>   

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center"
                }}
                style={{
                    width: "100%",
                }}
                >
                
                <ItemContainer>
                    <ProfileName text="Kai Erfle"></ProfileName>
                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

Messages.defaultProps = {};

export default Messages;
