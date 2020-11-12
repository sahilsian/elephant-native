import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

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
  height: 100%;
  max-height: 125px;
  background-color: ${(props) => props.theme.bgcolor}; 
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

//default color of container
const theme = {
  bgcolor: "#5C80BC"
};

const HomeText = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  color: ${(props) => (props.color ? "white" : "black")};
`;

const Categories = ({ MaxWidth, text, theme, Color }) => {
  return (
      <Container maxwidth={MaxWidth} theme={theme}>
        <HomeText color={Color}>{text}</HomeText>
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