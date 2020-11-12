import React from "react";
import styled from "styled-components/native";
<<<<<<< HEAD
import { View, Text } from "react-native";

const MsgConnetedContainer = style.View`
=======

const MsgConnetedContainer = styled.View`
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
    display: flex;
    max-width: 384px;
    max-height: 69px;
`;

<<<<<<< HEAD
const MsgConnetedTitle = style.Text`
    text-align: center;
    justify-content:center;
    font-family: Roboto;
=======
const MsgConnetedTitle = styled.Text`
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
    font-size: 25px;
    line-height: 29px;
    color: #000000;
`;

const MsgConnectText = styled.Text`
    font-family: Quicksand;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

<<<<<<< HEAD
const ProfileIcon = style.View`
=======
const ProfileIcon = styled.View`
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
    width:40px;
    height: 40px;
`;


<<<<<<< HEAD
const MessageConnected = (title, text) => {
    return <View>
        <MsgConnetedContainer>
            <ProfileIcon src='/ProfileLogo.png' />
            <MsgConnetedTitle>{title}</MsgConnetedTitle>
            <MsgConnectText>{text}</MsgConnectText>
        </MsgConnetedContainer>
    </View>
=======
const MessageConnected = ({title, text}) => {
    return (
        <MsgConnetedContainer>
            <ProfileIcon />
            <MsgConnetedTitle>{title}</MsgConnetedTitle>
            <MsgConnectText>{text}</MsgConnectText>
        </MsgConnetedContainer>
    )
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
}

MessageConnected.defaultProps = {
    title: "Kai Erkle",
    text: "Photoshop Classes"
}

export default MessageConnected;

