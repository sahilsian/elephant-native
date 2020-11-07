import React, {useState} from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

const Wrapper = styled.View`
    
`;

const Button = styled.TouchableOpacity`
    background-color: ${props=>props.};
    width: 50px;
    height: 50px;
`;

const [selected, setSelected] = useState(false);

const RadioButtons = ({ title }) => {
  return (
      <Wrapper>
          <Button onPress={() => {
              setSelected(!selected)
          }}></Button>
      </Wrapper>
  )
};

RadioButtons.defaultProps = {
    title: "Your Radio Buttons"
};

export default RadioButtons;
