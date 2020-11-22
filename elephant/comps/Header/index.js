import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import BackButton from '../BackButton'

const HeadBox = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: ${props=>props.height ? props.height : "50px"};
`;

const HeadTitle = styled.Text`
    font-size: 32px;
    font-weight: ${props=>props.fontweight ? "normal" : "bold"};
    color: ${props=>props.color ? props.color : "#000"};
    padding: ${props=>props.padding ? "0px" : "5px"};
    margin-bottom: ${props=>props.marginBottom ? props.marginBottom : "5px"};
`;

const Header = ({color, margin, text, marginBottom, height, fontweight, padding, display, onPress}) => {
    return <View>
        <HeadBox height={height}>
            
            <HeadTitle padding={padding} marginBottom={marginBottom} fontweight={fontweight} color={color}>{text}</HeadTitle>
            <BackButton onPress={onPress} display={display}>

            </BackButton>
        </HeadBox>
    </View>
}

Header.defaultProps = {
    text: "Header",
}

export default Header
