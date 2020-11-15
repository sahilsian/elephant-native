import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const ProfileImg = styled.Image`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.View`
    width: 100%;
    height: auto;
    max-width: 94px;
    max-height: 90px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

const Profile = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 70px;
    top: 20px;
`;

const ProfileLogo = () => {
    return (
        <Wrapper>
            <Profile source={require("../../assets/User2.png")}></Profile>
            <ProfileImg source={require("../../assets/Polygon.png")}></ProfileImg>
        </Wrapper>
            

    )
    
}

ProfileLogo.defaultProps = {
}

export default ProfileLogo;