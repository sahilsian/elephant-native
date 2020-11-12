import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";


const MessageContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 300px;
    min-height: 100px;  
`;

const MessageBox = styled.View`
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#3D6FF1"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 255px;
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
`;


const Message = ({backgroundColor}) => {
    return <View>
        <MessageContainer>
            <MessageBox backgroundColor={backgroundColor}>
            </MessageBox>
        </MessageContainer>
    </View>
}

Message.defaultProps = {
    bgcolor: null,
}

export default Message;
