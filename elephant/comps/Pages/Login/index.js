import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import Button from '../../Button';
import Divider from '../../Divider'
import { Alert } from "react-native";
import AuthLogin from "../../authLogin"
import WelcomeComp from '../../Welcome'
import ElephantLogo from "../../Logo";
import axios from 'axios';
import { MyContext } from "../../context"
import { Router } from "react-router-native";
import LottieView from 'lottie-react-native';

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 80%;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: space-between;
`;

const AnimationWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fad;
`;

const GenericWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const Login = ({ history }) => {

  const [ani, setAnimation] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const context = useContext(MyContext);
  

  const HandleLogin = async(username, password) => {

    axios.post(`http://elephantidsp.herokuapp.com/auth/login`, {
      username : username,
      password : password,
      headers:{'content-type': 'application/json'}
    })

    .then(response => {
      // await AsyncStorage.setItem('token', response.token);
      context.setToken(response.data.access_token)
      console.log(context.token)
      history.push('/home')
    })

    .catch(error => {
      console.log(error, "this is an error")
      console.log(username, password)

      Alert.alert(
        'Elephant',
        'Username or Password is Incorrect',
        [
          {
            text: 'Okay',
            onPress: () => console.log('Ok Pressed')
          }
        ],
        { cancelable: false }
      );

    })

    

  }
  return (

      <Frame>
        {ani ?
        <AnimationWrapper>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../../../assets/loading.json')}
            autoPlay loop
        />
        </AnimationWrapper>
        
        :
        <FullWrapper>
          <GenericWrapper>
            <ElephantLogo Size={"150px"}></ElephantLogo>
            <WelcomeComp fontSize={"48px"} Display={true} />
          </GenericWrapper>
          <AuthLogin />
          <Divider MaxWidth={"138px"} />
          <GenericWrapper>
            <CustomInput placeholder={"Username"}
            onChange={username => setUsername(username)}
            />
            <CustomInput placeholder={"Password"}
            onChange={password => setPassword(password)}
            />
          </GenericWrapper>
          <Button buttonText={"Login"} onPress={() => HandleLogin(username, password)}/>
          <TextComp Margin={"20px"} text={"Don’t have an account?"}></TextComp>
          <Button buttonText={"Sign Up"} onPress={() => history.push("/signup")} />
          
        </FullWrapper>
        
        }
      </Frame>



  );
};

Login.defaultProps = {};

export default Login;
