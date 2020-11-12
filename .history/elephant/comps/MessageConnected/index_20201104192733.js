import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MsgConnetedContainer = style.View`
    display: flex;
    align-items: center;
    max-width: 384px;
    max-height: 69px;
`;

const MsgConnetedTitle = style.Text`
    text-align: center;
    justify-content:center;
    font-family: Roboto;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`;

const MsgConnectText = styled.Text`
    font-family: Quicksand;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

const ProfileIcon = style.View`
    width:40px;
    height: 40px;
`;


const MessageConnected = (title, text) => {
    return <View>
        <MsgConnetedContainer>
            <ProfileIcon src='/ProfileLogo.png' />
            <MsgConnetedTitle>{title}</MsgConnetedTitle>
            <MsgConnectText>{text}</MsgConnectText>
        </MsgConnetedContainer>
    </View>
}

MessageConnected.defaultProps ={
    title: "Kai Erkle",
    text: "Photoshop Classes"
}

export default MessageConnected;

