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
  max-width: ${(props) => (props.maxwidth ? "160px" : "125px")};
  width: 100%;
  min-height: 125px;
  max-height: 125px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#4D5061")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
`;

//default color of container
const theme = {
  bgcolor: "#5C80BC"
};

const HomeText = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: ${(props) => (props.color ? "white" : "black")};
`;

const Click = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;  
`;

const Categories = ({ MaxWidth, text, theme, Color, bgColor, onPress }) => {
  return (

      <Container maxwidth={MaxWidth} bgcolor={bgColor}>
        <Click onPress={onPress}>
          <HomeText color={Color}>{text}</HomeText>
        </Click>
      </Container>


  );
};

Categories.defaultProps = {
  MaxWidth: false,
  BgColor: false,
  Color: true,
  text: "Interest"

};

export default Categories;