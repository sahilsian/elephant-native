import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    max-height: ${props=>props.maxheight ? props.maxheight : "45px"};
    max-width: ${props=>props.maxwidth ? props.maxwidth : "150px"};
    margin-top: ${props=>props.margintop};
    
`;

const ButtonBox = styled.TouchableOpacity`
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#6C8DC3"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    shadowColor: #000;
    
    elevation: 6;

`;

const ButtonText = styled.Text`
    font-size: ${props=>props.textsize ? props.textsize : "20px"};
    color: ${props=>props.color ? props.color : "#fff"};
`;



const Button = ({BackgroundColor, decoration, color, maxHeight, MaxWidth, buttonText, marginTop, fontSize, onPress}) => {
    return (
       <ButtonContainer margintop={marginTop} 
       maxheight={maxHeight} maxwidth={MaxWidth}>
            <ButtonBox
            backgroundColor={BackgroundColor}
            onPress={onPress}
            >
            <ButtonText color={color} textsize={fontSize}>{buttonText}</ButtonText>
            </ButtonBox>
        </ButtonContainer>
    )
}

Button.defaultProps = {
    BackgroundColor: "#5C80BC",
    MaxWidth: "100px",
    buttonText: "Button",
    marginTop: "5px",
    fontSize: "20px"
}

export default Button;