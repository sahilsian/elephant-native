<<<<<<< HEAD
import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const HeadBox = styled.View`
    display: flex;
    align-items: center;
    justify-content: left;
    max-width: 292px;
    max-height: 45px;
`;

const HeadTitle = styled.Text`
    font-family: Quicksand;
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
    color: ${props=>props.color ? props.color : "#000"};
    padding: 5px;
    ${props=>props.highlight === true && css`
    background-color: #F5A;
    margin: 5px;
    `}
`;

const Header = ({color, highlight}) => {
    return <View>
        <HeadBox>
            <HeadTitle color={color} highlight={highlight}>Favourite People</HeadTitle>
        </HeadBox>
    </View>
}
=======
import React from 'react'
import styled, { css } from 'styled-components/native';
import { View, Text } from "react-native";

const Head = styled.Text`
font-family: Quicksand;
font-weight: bold;
font-size: 36px;
color: black;
`


export const Header = ({text}) => {
    return <View>
        <Head>
            {text}
        </Head>
    </View>
};
>>>>>>> 54e9e328cecf5dfd47ffab279cafce6deda02757

Header.defaultProps = {
    text: "Header"
}

export default Header
