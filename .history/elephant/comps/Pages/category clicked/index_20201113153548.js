import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";
import MessageConnected from "../../MessageConnected";


const MessageConnected = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
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

export const SubCategories = ({ title, text }) => {
    return (
      <View>
        <Head>Basketball</Head>
        <Container>
            <MessageConnected>
                <MsgConnetedTitle>{title}</MsgConnetedTitle>
                <MsgConnectText>{text}</MsgConnectText>
            </MessageConnected>
        </Container>
      </View>
    );
  };
  
SubCategories.defaultProps = {
    title: "Kai Erkle",
    text: "Photoshop Classes"
};
  
export default SubCategories;
  