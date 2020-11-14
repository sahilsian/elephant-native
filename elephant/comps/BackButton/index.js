import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
`;

const Arrow = styled.Image`

`;

const Texty = styled.Text`
    font-size: 20px;
    margin: 0px 8px;
`;


const BackButton = ({}) => {
    return (
       <Container>
           <Arrow source={require("../../assets/Back.png")}></Arrow>
            <Texty>Back</Texty>
       </Container>
    )
}

BackButton.defaultProps = {
    BackgroundColor: "#5C80BC",
    MaxWidth: "100px",
    buttonText: "Button",
    marginTop: "5px",
    fontSize: "20px"
}

export default BackButton;