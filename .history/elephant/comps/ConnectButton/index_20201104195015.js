import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ConnectContainer = style.View`
    background-color: #CED9EB;
    display: flex;
    align-items: center;
    max-width: 78px;
    min-height: 33px;
    border-radius: 5px;
`;

const ConnectTtitle = style.Text`
    text-align: center;
    justify-content:center;
    margin: auto;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #000000;
`;

const ConnectButton = ({text}) => {
    return <View>
        <ConnectContainer>
            <ConnectTtitle>{text}</ConnectTtitle>
        </ConnectContainer>
    </View>
}

ConnectButton.defaultProps = {
    text: "Connect",
}

export default ConnectButton;