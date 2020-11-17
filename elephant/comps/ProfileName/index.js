import React from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { text } from "@storybook/addon-knobs";

const Name = styled.Text`
fontSize: 26px;
color: #191716;
fontWeight: 500;
`

const Contain = styled.View`
display: flex;
`

const ProfileImg = styled.Image`
    alignSelf: flex-start;
    right: 65px;
    top: 50px;
    max-width: 55px;
    max-height: 55px;
`;

const Sub = styled.Text`
alignSelf: flex-start;
fontSize: 16px;
color: #191716
`;



const ProfileName = ({text, subText}) => {
    return (

       <Contain>
            <ProfileImg source={require("../../assets/photo.png")}></ProfileImg>
            <Name>{text}</Name>
            <Sub>{subText}</Sub>
        </Contain>

        
    )
}

ProfileName.defaultProps = {
}

export default ProfileName;