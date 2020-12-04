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
  width: 70px;
  min-height: 70px;
  max-height: 70px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#4D5061")};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-top: 8px;
`;

const Click = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;  
`;

const TextandBox = styled.View`
  width: 70px;
  height: 120px;
  margin: 11px;
`;

const Img = styled.Image`
  max-width: 50px;
  max-height: 50px;
`;

const Categories = ({ MaxWidth, text, theme, Color, bgColor, onPress, source }) => {
  return (
    <TextandBox>
      <Container maxwidth={MaxWidth} bgcolor={bgColor}>
        <Click onPress={onPress}>
          <Img source={source}></Img>
        </Click>
      </Container>
      <HomeText color={Color}>{text}</HomeText>

    </TextandBox>
      


  );
};

Categories.defaultProps = {
  MaxWidth: false,
  BgColor: false,
  Color: true,
  text: "Interest"

};

export default Categories;