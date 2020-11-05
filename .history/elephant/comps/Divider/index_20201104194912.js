import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const DividerContainer = styled.View`
    display: flex;
    align-items: center; 
    max-width: 382px;
    max-height: 16px;
`;

const DividerLine = styled.View`
    text-align: center;
    width: 208px;
    border: 1px solid #000000;
`;

const Divider = ({ title }) => {
    return <View>
        <DividerContainer>
            <DividerLine></DividerLine>
        </DividerContainer>
    </View>
}

Divider.defaultProps = {
   
}

export default Divider;