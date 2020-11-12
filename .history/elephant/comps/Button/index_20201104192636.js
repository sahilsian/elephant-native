import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 128px;
    min-height: 47px;  
`;

const ButtonBox = styled.View`
    background: ${props=>props.backgroundColor ? props.backgroundColor : "#6C8DC3"};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 128px;
    min-height: 47px;  
    border-radius: 5px;
`;


const Button = ({backgroundColor}) => {
    return <View>
       <ButtonContainer>
            <ButtonBox backgroundColor={backgroundColor}>
            </ButtonBox>
        </ButtonContainer>
    </View>
}

Button.defaultProps = {
    bgcolor: null,
}

export default Button;