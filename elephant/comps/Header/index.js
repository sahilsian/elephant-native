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

Header.defaultProps = {
    text: "Header"
}

export default Header
