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
    display: ${props=>props.display ? "none" : "flex"};
`

const MainTitle = styled.Text`
    font-size: ${props=>props.fontsize ? props.fontsize : "64px"}
`;

const WelcomeComp = ({ initial, main, Display, fontSize }) => {
    return (
        <WelcomeContainer>
            <InitialTitle display={Display}>{initial}</InitialTitle>
            <MainTitle fontsize={fontSize}>{main}</MainTitle>
        </WelcomeContainer>
    )
}

WelcomeComp.defaultProps = {
    initial: "Welcome to",
    main: "Elephant",
    Display: false,
    fontSize: false
}

export default WelcomeComp;