import React, {useEffect, useRef} from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";
import Button from "../../Button";
import LottieView from 'lottie-react-native';
//add image into folder to access it 

//just replace this button with the one created

const Contain = styled.View`
display: flex;
width: 375px;
height: 812px;
align-items: center;
/* border: solid red 1px; */
`;


const Head = styled.Text`
/* font-family: Quicksand; */
padding-top: 100px;
font-style: normal;
font-weight: normal;
font-size: 36px;
`;

const SubHead = styled.Text`
/* font-family: Quicksand; */
padding-top: 35px;
text-align: center;
font-style: normal;
font-weight: normal;
font-size: 30px;
`
//button container
const Btn = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

const Image = styled.Image`
  width: 300;
  height: 300;
`;

//image container
const Img = styled.View`
padding-top: 50px;
`


const FinishedSignup = ({}) => {

  // useEffect(()=> {
  //   animation.play()
  // })

  return (
    <Contain>
      <Head>Congratulations!</Head>
      <SubHead>You’ve offically signed
        up with Elephant!</SubHead>
      <Btn>
        <Button buttonText={"Lets Get Started!"}  MaxWidth={"50%"}  />
      </Btn>
      <Img>
        {/* <LottieView
        ref={animation => {
          animation = animation;
        }}
         source={require('../../../assets/LottieJSON/greeting.json')} 
         autoPlay loop
         /> */}
      </Img>
    </Contain>
  );
};

FinishedSignup.defaultProps = {

}

export default FinishedSignup;
