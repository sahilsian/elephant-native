import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import BackButton from '../BackButton'

const HeadBox = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: ${props=>props.height ? props.height : "50px"};
    flex-direction: row;
    align-items: center;
`;

const HeadTitle = styled.Text`
    font-size: 32px;
    font-weight: ${props=>props.fontweight ? "normal" : "bold"};
    color: ${props=>props.color ? props.color : "#000"};
    padding: 5px;
    margin-bottom: ${props=>props.marginBottom ? props.marginBottom : "5px"};
`;

const Header = ({color, margin, text, marginBottom, height, fontweight}) => {
    return <View>
        <HeadBox height={height}>
            <BackButton headerJoin>

            </BackButton>
            <HeadTitle marginBottom={marginBottom} fontweight={fontweight} color={color}>{text}</HeadTitle>
        </HeadBox>
    </View>
}

Header.defaultProps = {
    text: "Header",
}

export default Header
