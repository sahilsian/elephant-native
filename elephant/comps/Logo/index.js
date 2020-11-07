import React from "react";
import styled from "styled-components/native";

const ElephantImg = styled.Image`
    width: ${props=>props.size};
    height: ${props=>props.size};
`;

const ElephantLogo = ({Size}) => {
  return (
    <ElephantImg size={Size} source={require("../../assets/elephant.png")}></ElephantImg>


  );
};

ElephantLogo.defaultProps = {
    Size: "200px"

};

export default ElephantLogo;
