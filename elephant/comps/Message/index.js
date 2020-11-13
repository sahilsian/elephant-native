import { View } from "react-native";
import React, {useState} from "react";
import styled from "styled-components/native";

const MessageContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`;

const MessageBox = styled.View`
    background-color: ${props=>props.userBool ? "#5C80BC" : "#E1E1E1" };
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;

`;

//false means message of user chatting
//true means incoming message

const MessageText = styled.Text`
`;


const Message = ({UserBool, text}) => {

    const [user, SetUser] = useState(false)
    return (
        <MessageContainer>
            <MessageBox userBool={user}>
                <MessageText textBool={user}>{text}</MessageText>
            </MessageBox>
        </MessageContainer>
    )
}

Message.defaultProps = {
    text: "Hello I am an Elephant. I have four legs and"
}

export default Message;
