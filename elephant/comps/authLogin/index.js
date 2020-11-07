import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const AuthLoginContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    max-height: 45px;
    margin-top: ${props=>props.margintop};
    
`;

const AuthLoginBox = styled.View`
    background-color: ${props=>props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    shadowColor: #000;
    shadowOffset: {
        width: 0;
        height: 3;
    }
    shadowOpacity: 0.27;
    shadowRadius: 4.65;
    elevation: 6;
    position: relative;
`;

const AuthLoginText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

const GoogleIconWrapper = styled.View`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 8;
    top: 5;
    background-color: #fff;
    border-radius: 100px;
`;

const GoogleIcon = styled.Image`
    width: 20px;
    height: 20px;
`;


const AuthLogin = ({BackgroundColor, MaxWidth, onClick, LoginText, marginTop}) => {
    return (
       <AuthLoginContainer margintop={marginTop}>
            <AuthLoginBox
            backgroundColor={BackgroundColor}
            maxwidth={MaxWidth}
            onClick={onClick}
            >
            <AuthLoginText>{LoginText}</AuthLoginText>
            <GoogleIconWrapper>
                <GoogleIcon source={require("../../assets/googleIcon.png")}></GoogleIcon>
            </GoogleIconWrapper>
            </AuthLoginBox>
        </AuthLoginContainer>
    )
}

AuthLogin.defaultProps = {
    BackgroundColor: "#4285F4",
    MaxWidth: "100px",
    LoginText: "Login with Google",
    marginTop: "5px"
}

export default AuthLogin;