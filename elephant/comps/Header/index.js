import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const HeadBox = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: ${props=>props.height ? props.height : "50px"};
    justify-content: center;
`;

const HeadTitle = styled.Text`
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
    color: ${props=>props.color ? props.color : "#000"};
    padding: 5px;
    margin-bottom: ${props=>props.marginBottom ? props.marginBottom : "5px"};
`;

const Header = ({color, margin, text, marginBottom, height}) => {
    return <View>
        <HeadBox height={height}>
            <HeadTitle marginBottom={marginBottom} color={color}>{text}</HeadTitle>
        </HeadBox>
    </View>
}

Header.defaultProps = {
    text: "Header",
}

export default Header
