import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ButtonContainer = styled.View`
    width: 100%;
    height: 100%;
    max-height: 40px;
    align-items: center;
`;

const Button = styled.View`
    width: 100%;
    height: 100%;
    max-width: 80px;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #000000;
    position: relative;
`;

const ButtonText = styled.Text`
    font-size: 18px;
`;

const Arrow = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #000000;
    border-right-width: 1px;
    border-right-color: #000000;
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -5px;
    right: 0;
`

const NextButton = ({ onClick, text}) => {
    return (
       <ButtonContainer>
           <Button>
               <Arrow style={{
                   transform: [
                    { rotate: "-45deg" }
                   ]
               }}></Arrow>
                <ButtonText onClick={onClick}>{text}</ButtonText>
           </Button>
        </ButtonContainer>
    )
}

NextButton.defaultProps = {
    text: "Next"
}

export default NextButton;