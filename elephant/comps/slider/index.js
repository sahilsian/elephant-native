import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";
import Slider from '@react-native-community/slider';

const Wrapper = styled.View`

`;

const SliderComp = ({onValueChange, value}) => {
  return (
    <Wrapper>
         <Slider
            style={{width: 270, height: 40}}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#AFD2E9"
            maximumTrackTintColor="#000000"
            thumbTintColor="#5C80BC"
            onValueChange={onValueChange}
            value={value}
        />
    </Wrapper>
  );
};

SliderComp.defaultProps = {
  text: "Test",
  Color: true
};

export default SliderComp;
