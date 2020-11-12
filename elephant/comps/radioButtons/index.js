import React, {useState} from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import TextComp from "../Text";

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    background-color: ${props=>props.bgcolor ? "#5C80BC" : "#DDDDDD"};
    width: 30px;
    height: 30px;
    border-radius: 100px;
    margin-right: 20px;
`;


const RadioButtons = ({ title, text }) => {
const [selected, setSelected] = useState(false);

  return (
      <Wrapper>
          <Button bgcolor={selected} onPress={() => {
              setSelected(!selected)
          }}></Button>
          <TextComp text={text}></TextComp>
      </Wrapper>
  )
};

RadioButtons.defaultProps = {
    title: "Your Radio Buttons",
    text: "Radio Button Option"
};

export default RadioButtons;
