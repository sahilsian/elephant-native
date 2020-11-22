import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled.View`
    
    flex-direction: row;
    align-items: center;
    margin-left: -10px;
    display: ${props=>props.display ? "none" : "flex"};
`;

const Touch = styled.TouchableOpacity`
    flex-direction: row;
`;

const Arrow = styled.Image`

`;

const Texty = styled.Text`
    font-size: 20px;
    margin: 4px 0px;
    display: ${props=>props.display ? "none" : "flex"};
`;


const BackButton = ({ onPress, headerJoin, display }) => {
    return (
       <Container display={display} headerJoin={headerJoin}>
           <Touch onPress={onPress}>
            <Arrow source={require("../../assets/back2.png")}></Arrow>
                <Texty display={headerJoin}>Back</Texty>
           </Touch>
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