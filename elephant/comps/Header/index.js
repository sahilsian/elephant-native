import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const HeadBox = styled.View`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: auto;
`;

const HeadTitle = styled.Text`
    font-size: 36px;
    font-weight: bold;
    color: ${props=>props.color ? props.color : "#000"};
    ${props=>props.highlight === true && css`
    background-color: #F5A;
    `}
`;

const Header = ({color, highlight, text}) => {
    return <View>
        <HeadBox>
            <HeadTitle color={color} highlight={highlight}>{text}</HeadTitle>
        </HeadBox>
    </View>
}

Header.defaultProps = {
    color: false,
    highlight: false,
    text: "Page Title"
}

export default Header;