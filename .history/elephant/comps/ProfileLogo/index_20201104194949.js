import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const ProfileImg = styled.View`
    width: 147px;
    height: 147px;
`;

const ProfileLogo = () => {
    return <View>
        <ProfileImg src="/ProfileLogo.png"></ProfileImg>
    </View>
}

ProfileLogo.defaultProps = {
}

export default ProfileLogo;