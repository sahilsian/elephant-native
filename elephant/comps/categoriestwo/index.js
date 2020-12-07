import React from "react";
import styled, { css } from "styled-components/native";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";

//list of colors for easy implementation
var bgcolor = [
  "#5C80BC", //dark blue
  "#4D5061", //black
  "#AFD2E9", //light blue
  "#EBC1AD" //sand
];

// to change bgcolor of container, use theme={{ bgcolor: "color-name" }}, when implementing 

const Container = styled.View`
  display: flex;
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#4D5061")};
  border-radius: 20px;
  
  padding: 10px;
  shadowColor: #000;
  shadowOffset: {
    width: 0;
    height: 2;
  }
  shadowOpacity: 0.25;
  shadowRadius: 3.84;

  elevation: 5;
  
`;

//default color of container
const theme = {
  bgcolor: "#5C80BC"
};

const HomeText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
  margin-left: 10px;
`;

const Click = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

`;

const TextandBox = styled.View`
  width: 95%;
  margin: 8px;
`;

const Img = styled.Image`
  max-width: 50px;
  max-height: 50px;
`;

const CategoriesTwo = ({ MaxWidth, text, theme, Color, bgColor, onPress, source }) => {
  return (
    <TextandBox>
      <Container maxwidth={MaxWidth} bgcolor={bgColor}>
        <Click onPress={onPress}>
          <Img source={source}></Img>
      <HomeText color={Color}>{text}</HomeText>

        </Click>

      </Container>

    </TextandBox>
      


  );
};

CategoriesTwo.defaultProps = {
  MaxWidth: false,
  BgColor: false,
  Color: true,
  text: "Interest"

};

export default CategoriesTwo;