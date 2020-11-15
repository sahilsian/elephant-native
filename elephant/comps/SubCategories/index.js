import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

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
  background-color: ${(props) => (props.bgcolor ? "#5C80BC" : "#4D5061")};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  margin: 10px 14px;
`;

const TextStyle = styled.Text`
  color: #fff;
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
      <Head>Outdoor Activities</Head>
      <Container color={color} theme={theme}>
        <Interests>Fishing</Interests>
        <Interests>Kayaking</Interests>
        <Interests>Biking</Interests>
        <Interests>Hiking</Interests>
        <Interests>Paddling</Interests>
        <Interests>Camping</Interests>
        <Interests>Beach Combing</Interests>
        <Interests>Nature Walks</Interests>
        <Interests>Gardening</Interests>
        <Interests>Geocaching</Interests>
        <Interests>Hunting</Interests>
        {text}
      </Container>
    </View>
  );
};

SubCategories.defaultProps = {
  text: "Test"
};

export default SubCategories;
