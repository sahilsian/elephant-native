import React from 'react';
import styled, {css} from 'styled-components';

const MsgConnetedContainer = style.div`
    display: flex;
    align-items: center;
    max-width: 384px;
    max-height: 69px;
`;

const MsgConnetedTitle = style.p`
    text-align: center;
    justify-content:center;
    font-family: Roboto;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`;

const MsgConnectText = styled.p`
    font-family: Quicksand;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

const ProfileIcon = style.img`
    width:40px;
    height: 40px;
`;


const MessageConnected = (title, text) => {
    return <MsgConnetedContainer>
        <ProfileIcon src='/ProfileLogo.png' />
        <MsgConnetedTitle>{title}</MsgConnetedTitle>
        <MsgConnectText>{text}</MsgConnectText>
    </MsgConnetedContainer>
}

MessageConnected.defaultProps ={
    title: "Kai Erkle",
    text: "Photoshop Classes"
}

export default MessageConnected;

