import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const WelcomeContainer = styled.View`
    width: 100%;
    align-items: center;
    color: #4D5061;
`;

const InitialTitle = styled.Text`
    font-size: 36px;
`

const MainTitle = styled.Text`
    font-size: 64px;
`;

const WelcomeComp = ({ initial, main }) => {
    return (
        <WelcomeContainer>
            <InitialTitle>{initial}</InitialTitle>
            <MainTitle>{main}</MainTitle>
        </WelcomeContainer>
    )
}

WelcomeComp.defaultProps = {
    initial: "Welcome to",
    main: "Elephant"
}

export default WelcomeComp;