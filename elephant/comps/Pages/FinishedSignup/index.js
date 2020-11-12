import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

//add image into folder to access it 

//just replace this button with the one created
import Buttons from "../../comps/Button1";

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
padding-top: 70px;
`;

const Image = styled.Image`
  width: 300;
  height: 300;
`;

//image container
const Img = styled.View`
padding-top: 50px;
`


export const Main = ({}) => {
  return (
    <Contain>
      <Head>Congratulations!</Head>
      <SubHead>You’ve offically signed
        up with Elephant!</SubHead>
      <Btn>
        <Buttons text="Let's get started" />
      </Btn>
      <Img>
        <Image source={require("./man.png")} />
      </Img>
    </Contain>
  );
};

export default Main;
