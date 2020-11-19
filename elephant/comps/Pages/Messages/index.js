import React, {useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text, Image } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";

import ProfileName from '../../ProfileName';
import BackButton from '../../BackButton'

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

const Back = styled.View`
display: flex;
alignSelf: flex-start;
right: 10%;
width: 100%;
margin-top: 10px;
`

const ProfileCont = styled.View`
width: 100%;
left: 30%;
`


const MessageSent = styled.View`
display: flex;
left: 30%;
padding-bottom: 30%;
`

const MessageReceive = styled.View`
display: flex;
right: 120%;
`

const Box = styled.View`
width: auto;
height: auto;
background-color: lightblue;
position: absolute;
right: 20px;
padding: 10px 10px 10px 10px;
border-radius: 10px;


`
const Text1 = styled.Text`
font-size: 20px;
`

const MessagesCont = styled.View`

display: flex;
flexDirection: row;
justifyContent: space-around;

`

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
                    <Back>
                        <BackButton></BackButton>
                    </Back>

                    <ProfileCont>
                        <ProfileName text="Kai Erfle" subText="Coach"></ProfileName>
                    </ProfileCont>

                    <MessagesCont>
                        <MessageSent>
                            <Box>
                                <Text1>Hello World!</Text1>
                            </Box>
                        </MessageSent>

                        <MessageReceive>
                            <Box>
                                <Text1>Hello User!</Text1>
                            </Box>
                        </MessageReceive>
                    </MessagesCont>
                    
                </ItemContainer>
            </ScrollView>
        </AdjustedWidth>

    </Container>



  );
};

Messages.defaultProps = {};

export default Messages;
