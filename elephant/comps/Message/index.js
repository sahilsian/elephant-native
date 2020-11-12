<<<<<<< HEAD
import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";


=======
import React, {useState} from "react";
import styled from "styled-components/native";

>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
const MessageContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`;

const MessageBox = styled.View`
<<<<<<< HEAD
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#3D6FF1"};
=======
    background-color: ${props=>props.userBool ? "#5C80BC" : "#E1E1E1" };
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
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


<<<<<<< HEAD
const Message = ({backgroundColor}) => {
    return <View>
        <MessageContainer>
            <MessageBox backgroundColor={backgroundColor}>
            </MessageBox>
        </MessageContainer>
    </View>
=======
const Message = ({UserBool, text}) => {

    const [user, SetUser] = useState(false)
    return (
        <MessageContainer>
            <MessageBox userBool={user}>
                <MessageText textBool={user}>{text}</MessageText>
            </MessageBox>
        </MessageContainer>
    )
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757
}

Message.defaultProps = {
    text: "Hello I am an Elephant. I have four legs and"
}

export default Message;
