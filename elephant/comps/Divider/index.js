import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const DividerContainer = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 20px;
    max-width: ${props=>props.maxwidth};
    flex-direction: row;
`;

const DividerLine = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #000000;
    width: 100%;
    margin-bottom: 6.5px;
`;

const MiddleText = styled.Text`
    margin: 0px 10px;
    font-size: 16px;
`;

const Divider = ({ title, MaxWidth }) => {
    return (
        <DividerContainer
        maxwidth={MaxWidth}
        >
            <DividerLine></DividerLine>
            <MiddleText>{title}</MiddleText>
            <DividerLine></DividerLine>
        </DividerContainer>
    )
}

Divider.defaultProps = {
    title: "or",
    MaxWidth: "100px"
}

export default Divider;