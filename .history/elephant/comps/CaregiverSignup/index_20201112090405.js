import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const CaregiverSignupBox = styled.div`
    height: 170px;
    width: 478px;
    left: 117px;
    top: 688px;
    padding: 15px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF;
`;

const SignupBannerTitle = styled.p`
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    color: #000000;
`;

const SignupBannerText = styled.p`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    left: 30px;
`;

const CaregiverSignupBanner =({title, text})=> {
    return <CaregiverSignupBox>
        <SignupBannerTitle>{title}</SignupBannerTitle>
        <SignupBannerText>{text}</SignupBannerText>
    </CaregiverSignupBox>
}

CaregiverSignupBanner.defaultProps = {
    title: "Congratulations!",
    text: "You’ve offically signed up with Elephant!"
}

export default CaregiverSignupBanner;