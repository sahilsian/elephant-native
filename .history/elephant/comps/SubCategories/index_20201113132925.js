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
  width: 95px;
  height: 85px;
  background-color: ${(props) => props.theme.bgcolor}; 
  // background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;

  font-family: Quicksand;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.color ? "white" : "black")};

  justify-content: flex-end;
  padding-bottom: 10px;
`;

const Head = styled.Text`
/* font-family: Quicksand; */
padding-top: 93px;
font-style: normal;
font-weight: normal;
font-size: 45px;
`;

//default color of container
const theme = {
  bgcolor: "#5C80BC"
};

export const SubCategories = ({ text, theme, color }) => {
  return (
    <View>
      <Container color={color} theme={theme}>
        <Head>Outdoor Activities</Head>
        {text}
      </Container>
    </View>
  );
};

SubCategories.defaultProps = {
  // width: "125px",
  theme
};

export default SubCategories;
