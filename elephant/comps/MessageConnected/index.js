import React from "react";
import styled from "styled-components/native";

const MsgConnetedContainer = styled.View`
    display: flex;
    max-width: 384px;
    max-height: 69px;
`;

const MsgConnetedTitle = styled.Text`
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

const ProfileIcon = styled.View`
    width:40px;
    height: 40px;
`;


const MessageConnected = ({title, text}) => {
    return (
        <MsgConnetedContainer>
            <ProfileIcon />
            <MsgConnetedTitle>{title}</MsgConnetedTitle>
            <MsgConnectText>{text}</MsgConnectText>
        </MsgConnetedContainer>
    )
}

MessageConnected.defaultProps = {
    title: "Kai Erkle",
    text: "Photoshop Classes"
}

export default MessageConnected;

