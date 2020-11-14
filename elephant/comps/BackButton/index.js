import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled.View`

`;


const BackButton = ({}) => {
    return (
       <div></div>
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