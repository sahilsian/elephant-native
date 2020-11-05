import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    max-height: 45px;
    max-width: ${props=>props.maxwidth ? props.maxwidth : "150px"};
`;

const ButtonBox = styled.View`
    background-color: ${props=>props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    

`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
`;


const Button = ({BackgroundColor, MaxWidth, onClick, buttonText}) => {
    return (
       <ButtonContainer>
            <ButtonBox
            backgroundColor={BackgroundColor}
            maxwidth={MaxWidth}
            onClick={onClick}
            >
            <ButtonText>{buttonText}</ButtonText>
            </ButtonBox>
        </ButtonContainer>
    )
}

Button.defaultProps = {
    BackgroundColor: "#5C80BC",
    MaxWidth: "100px",
    buttonText: "Button"
}

export default Button;